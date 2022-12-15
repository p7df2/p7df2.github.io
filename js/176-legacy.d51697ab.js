"use strict";(self["webpackChunkplank"]=self["webpackChunkplank"]||[]).push([[176],{3176:(t,e,i)=>{i.r(e),i.d(e,{FilesystemWeb:()=>a});var r=i(9895);function s(t){const e=t.split("/").filter((t=>"."!==t)),i=[];return e.forEach((t=>{".."===t&&i.length>0&&".."!==i[i.length-1]?i.pop():i.push(t)})),i.join("/")}function o(t,e){t=s(t),e=s(e);const i=t.split("/"),r=e.split("/");return t!==e&&i.every(((t,e)=>t===r[e]))}class a extends r.Uw{constructor(){super(...arguments),this.DB_VERSION=1,this.DB_NAME="Disc",this._writeCmds=["add","put","delete"]}async initDb(){if(void 0!==this._db)return this._db;if(!("indexedDB"in window))throw this.unavailable("This browser doesn't support IndexedDB");return new Promise(((t,e)=>{const i=indexedDB.open(this.DB_NAME,this.DB_VERSION);i.onupgradeneeded=a.doUpgrade,i.onsuccess=()=>{this._db=i.result,t(i.result)},i.onerror=()=>e(i.error),i.onblocked=()=>{console.warn("db blocked")}}))}static doUpgrade(t){const e=t.target,i=e.result;switch(t.oldVersion){case 0:case 1:default:{i.objectStoreNames.contains("FileStorage")&&i.deleteObjectStore("FileStorage");const t=i.createObjectStore("FileStorage",{keyPath:"path"});t.createIndex("by_folder","folder")}}}async dbRequest(t,e){const i=-1!==this._writeCmds.indexOf(t)?"readwrite":"readonly";return this.initDb().then((r=>new Promise(((s,o)=>{const a=r.transaction(["FileStorage"],i),n=a.objectStore("FileStorage"),c=n[t](...e);c.onsuccess=()=>s(c.result),c.onerror=()=>o(c.error)}))))}async dbIndexRequest(t,e,i){const r=-1!==this._writeCmds.indexOf(e)?"readwrite":"readonly";return this.initDb().then((s=>new Promise(((o,a)=>{const n=s.transaction(["FileStorage"],r),c=n.objectStore("FileStorage"),d=c.index(t),h=d[e](...i);h.onsuccess=()=>o(h.result),h.onerror=()=>a(h.error)}))))}getPath(t,e){const i=void 0!==e?e.replace(/^[/]+|[/]+$/g,""):"";let r="";return void 0!==t&&(r+="/"+t),""!==e&&(r+="/"+i),r}async clear(){const t=await this.initDb(),e=t.transaction(["FileStorage"],"readwrite"),i=e.objectStore("FileStorage");i.clear()}async readFile(t){const e=this.getPath(t.directory,t.path),i=await this.dbRequest("get",[e]);if(void 0===i)throw Error("File does not exist.");return{data:i.content?i.content:""}}async writeFile(t){const e=this.getPath(t.directory,t.path);let i=t.data;const r=t.encoding,s=t.recursive,o=await this.dbRequest("get",[e]);if(o&&"directory"===o.type)throw Error("The supplied path is a directory.");const a=e.substr(0,e.lastIndexOf("/")),n=await this.dbRequest("get",[a]);if(void 0===n){const e=a.indexOf("/",1);if(-1!==e){const i=a.substr(e);await this.mkdir({path:i,directory:t.directory,recursive:s})}}if(!r&&(i=i.indexOf(",")>=0?i.split(",")[1]:i,!this.isBase64String(i)))throw Error("The supplied data is not valid base64 content.");const c=Date.now(),d={path:e,folder:a,type:"file",size:i.length,ctime:c,mtime:c,content:i};return await this.dbRequest("put",[d]),{uri:d.path}}async appendFile(t){const e=this.getPath(t.directory,t.path);let i=t.data;const r=t.encoding,s=e.substr(0,e.lastIndexOf("/")),o=Date.now();let a=o;const n=await this.dbRequest("get",[e]);if(n&&"directory"===n.type)throw Error("The supplied path is a directory.");const c=await this.dbRequest("get",[s]);if(void 0===c){const e=s.indexOf("/",1);if(-1!==e){const i=s.substr(e);await this.mkdir({path:i,directory:t.directory,recursive:!0})}}if(!r&&!this.isBase64String(i))throw Error("The supplied data is not valid base64 content.");void 0!==n&&(i=void 0===n.content||r?n.content+i:btoa(atob(n.content)+atob(i)),a=n.ctime);const d={path:e,folder:s,type:"file",size:i.length,ctime:a,mtime:o,content:i};await this.dbRequest("put",[d])}async deleteFile(t){const e=this.getPath(t.directory,t.path),i=await this.dbRequest("get",[e]);if(void 0===i)throw Error("File does not exist.");const r=await this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(e)]);if(0!==r.length)throw Error("Folder is not empty.");await this.dbRequest("delete",[e])}async mkdir(t){const e=this.getPath(t.directory,t.path),i=t.recursive,r=e.substr(0,e.lastIndexOf("/")),s=(e.match(/\//g)||[]).length,o=await this.dbRequest("get",[r]),a=await this.dbRequest("get",[e]);if(1===s)throw Error("Cannot create Root directory");if(void 0!==a)throw Error("Current directory does already exist.");if(!i&&2!==s&&void 0===o)throw Error("Parent directory must exist");if(i&&2!==s&&void 0===o){const e=r.substr(r.indexOf("/",1));await this.mkdir({path:e,directory:t.directory,recursive:i})}const n=Date.now(),c={path:e,folder:r,type:"directory",size:0,ctime:n,mtime:n};await this.dbRequest("put",[c])}async rmdir(t){const{path:e,directory:i,recursive:r}=t,s=this.getPath(i,e),o=await this.dbRequest("get",[s]);if(void 0===o)throw Error("Folder does not exist.");if("directory"!==o.type)throw Error("Requested path is not a directory");const a=await this.readdir({path:e,directory:i});if(0!==a.files.length&&!r)throw Error("Folder is not empty");for(const n of a.files){const t=`${e}/${n.name}`,s=await this.stat({path:t,directory:i});"file"===s.type?await this.deleteFile({path:t,directory:i}):await this.rmdir({path:t,directory:i,recursive:r})}await this.dbRequest("delete",[s])}async readdir(t){const e=this.getPath(t.directory,t.path),i=await this.dbRequest("get",[e]);if(""!==t.path&&void 0===i)throw Error("Folder does not exist.");const r=await this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(e)]),s=await Promise.all(r.map((async t=>{let i=await this.dbRequest("get",[t]);return void 0===i&&(i=await this.dbRequest("get",[t+"/"])),{name:t.substring(e.length+1),type:i.type,size:i.size,ctime:i.ctime,mtime:i.mtime,uri:i.path}})));return{files:s}}async getUri(t){const e=this.getPath(t.directory,t.path);let i=await this.dbRequest("get",[e]);return void 0===i&&(i=await this.dbRequest("get",[e+"/"])),{uri:(null===i||void 0===i?void 0:i.path)||e}}async stat(t){const e=this.getPath(t.directory,t.path);let i=await this.dbRequest("get",[e]);if(void 0===i&&(i=await this.dbRequest("get",[e+"/"])),void 0===i)throw Error("Entry does not exist.");return{type:i.type,size:i.size,ctime:i.ctime,mtime:i.mtime,uri:i.path}}async rename(t){await this._copy(t,!0)}async copy(t){return this._copy(t,!1)}async requestPermissions(){return{publicStorage:"granted"}}async checkPermissions(){return{publicStorage:"granted"}}async _copy(t,e=!1){let{toDirectory:i}=t;const{to:r,from:s,directory:a}=t;if(!r||!s)throw Error("Both to and from must be provided");i||(i=a);const n=this.getPath(a,s),c=this.getPath(i,r);if(n===c)return{uri:c};if(o(n,c))throw Error("To path cannot contain the from path");let d;try{d=await this.stat({path:r,directory:i})}catch(y){const t=r.split("/");t.pop();const e=t.join("/");if(t.length>0){const t=await this.stat({path:e,directory:i});if("directory"!==t.type)throw new Error("Parent directory of the to path is a file")}}if(d&&"directory"===d.type)throw new Error("Cannot overwrite a directory with a file");const h=await this.stat({path:s,directory:a}),l=async(t,e,r)=>{const s=this.getPath(i,t),o=await this.dbRequest("get",[s]);o.ctime=e,o.mtime=r,await this.dbRequest("put",[o])},u=h.ctime?h.ctime:Date.now();switch(h.type){case"file":{const t=await this.readFile({path:s,directory:a});e&&await this.deleteFile({path:s,directory:a});const o=await this.writeFile({path:r,directory:i,data:t.data});return e&&await l(r,u,h.mtime),o}case"directory":{if(d)throw Error("Cannot move a directory over an existing object");try{await this.mkdir({path:r,directory:i,recursive:!1}),e&&await l(r,u,h.mtime)}catch(y){}const t=(await this.readdir({path:s,directory:a})).files;for(const o of t)await this._copy({from:`${s}/${o}`,to:`${r}/${o}`,directory:a,toDirectory:i},e);e&&await this.rmdir({path:s,directory:a})}}return{uri:c}}isBase64String(t){try{return btoa(atob(t))==t}catch(e){return!1}}}a._debug=!0}}]);
//# sourceMappingURL=176-legacy.d51697ab.js.map
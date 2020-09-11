function gethashparams() {
  return location.hash&& Object.fromEntries(new URLSearchParams(location.hash.slice(1)));
}
function getsearchparams() {
  return location.search&& Object.fromEntries(new URL(location.href).searchParams);
}
function setsearchparams(opt) {
  let url = new URL(location.href);

  url.search = String(new URLSearchParams({ ...opt }));
  history.pushState(null, null, url.href);

  window.dispatchEvent(new Event("popstate"));
}

function sethashparams(opt) {
  let url = new URL(location.href);

  url.hash = String(new URLSearchParams({ ...opt }));
  history.pushState(null, null, url.href);

  window.dispatchEvent(new Event("hashchange"));
}
export{sethashparams,setsearchparams,getsearchparams,gethashparams}

const changelistener = () => {
  let hashparams = gethashparams();
  let searchparams = getsearchparams();
 /* console.log("hash params", hashparams);
  console.log("search params", searchparams);
*/

listercallbacks.forEach(async call=>call({search:searchparams,hash:hashparams}))
};

window.addEventListener("popstate", changelistener);

window.addEventListener("hashchange", changelistener);

const listercallbacks=new Set()

/*

type Callback=(params:{search:Record<string,string>,hash:Record<string,string>})=>void

*/
function watchparams(callback){

listercallbacks.add(callback)

}

function unwatchparams(callback){

listercallbacks.delete(callback)

}
export{watchparams,unwatchparams}

import Aria2 from "aria2";

let options = {
  host: "localhost",
  port: 6800,
  secure: false,
  secret: "",
  path: "/jsonrpc"
};

/**
 * addUri
 * addTorrent
 * getPeers
 * remove
 * pause
 * forcePause
 * pauseAll
 * forcePauseAll
 * unpause
 * unpauseAll
 * forceRemove
 * changePosition
 * tellStatus
 * getUris
 * getFiles
 * getServers
 * tellActive
 * tellWaiting
 * tellStopped
 * getOption
 * changeUri
 * changeOption
 * getGlobalOption
 * changeGlobalOption
 * purgeDownloadResult
 * removeDownloadResult
 * getVersion
 * getSessionInfo
 * shutdown
 * forceShutdown
 * getGlobalStat
 * saveSession
 * system.multicall
 * system.listMethods
 * system.listNotifications
 */

let aria2 = new Aria2(options);
// aria2.call('')
// activate: "tellActive",
// waiting: "tellWaiting",
// stopped: "tellStopped"

async function getTasksActive() {
  await aria2.open();
  let tasks = await aria2.call("tellActive", 0, 20);
  return tasks;
}
async function getTasksWaiting() {
  await aria2.open();
  let tasks = await aria2.call("tellWaiting", 0, 20);
  return tasks;
}
async function getTasksStopped() {
  await aria2.open();
  let tasks = await aria2.call("tellStopped", 0, 20);
  return tasks;
}
export default aria2;

export { getTasksActive, getTasksWaiting, getTasksStopped };

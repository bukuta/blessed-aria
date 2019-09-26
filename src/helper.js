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

export default aria2;

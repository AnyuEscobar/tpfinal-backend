import morgan from "morgan"
import fs from "node:fs"
import path from "node:path"

const logsDir = path.join(__dirname, "../../logs")

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}

const getLogStream = () => {
  const date = new Date().toISOString().slice(0, 10)
  const logFile = path.join(logsDir, `access-${date}.log`)
  return fs.createWriteStream(logFile, { flags: "a" })
}

const logger = morgan(
  ":remote-addr :method :url :status :res[content-length] - :response-time ms",

  { stream: getLogStream() }
)

export default logger
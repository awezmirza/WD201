let http = require("http")
let fs = require("fs")
let minimist = require("minimist")
let args = minimist(process.argv.slice(2), {
  default: {
    port: 3000
  }
});
let homecontent = ""
let projectcontent = ""
let regformcontent = ""

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err
  }
  homecontent = home
})

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err
  }
  projectcontent = project
})

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err
  }
  regformcontent = registration
})

http.createServer((request, response) => {
  let url = request.url
  response.writeHeader(200, { "Content-Type": "text/html" })
  switch (url) {
    case "/project":
      response.write(projectcontent)
      response.end()
      break
    case "/registration":
      response.write(regformcontent)
      response.end()
      break
    default:
      response.write(homecontent)
      response.end()
      break
  }
}).listen(args.port)

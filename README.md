# CI Deployment microservice
> This is a simple microservice that listens to a webhook POST request and triggers a build for a specific CI project, like CircleCI, TravisCI or VSTS

The microservice can be run on Node.js servers like now.sh

It is currently expecting a payload from Prismic CMS but it can be tailored to anything that you need.

### Changing the Circle CI project
Update the `POST_URL` variable on line 4 of `index.js` to change the

### Example curl request:
```sh
curl -X POST --header "Content-Type: application/json" -d '{"type":"api-update"}' https://circleci-webhook-microservice-aqbbkweovs.now.sh
```
### Example curl response:
```json
{"type":"api-update"}
```

## Links
* CircleCI API docs: https://circleci.com/docs/api/v1-reference/#new-build
* VSTS API docs: https://www.visualstudio.com/en-us/docs/integrate/api/build/builds#queueabuild
* TravisCI API docs: https://docs.travis-ci.com/user/triggering-builds/

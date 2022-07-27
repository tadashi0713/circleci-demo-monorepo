# circleci-gke-backend-demo

[![CircleCI](https://circleci.com/gh/japac-demo/circleci-gke-backend-demo/tree/master.svg?style=svg&circle-token=ae6951818e9642e0ecec1d6840e0759d9bc5ff6a)](https://circleci.com/gh/japac-demo/circleci-gke-backend-demo/tree/master)

https://app.gke-demo.tadashi-cci.com/api/

Python + Flask application deployed on gke

* Use gcp-gke orb to docker build + rollout image to gke
    * https://circleci.com/developer/orbs/orb/circleci/gcp-gke
```yaml
- gcp-gke/publish-and-rollout-image:
    executor: docker-build
    context: tadashi-demo-deploy-gke
    cluster: circleci-gke-demo
    container: backend
    deployment: backend
    image: circleci-gke-backend-demo
    registry-url: asia.gcr.io
    tag: $CIRCLE_SHA1
    use-remote-docker: false
```

* Use python orb to install dependency(pipenv) and test(pytest)
    * https://circleci.com/developer/orbs/orb/circleci/python
```yaml
- python/test:
    pkg-manager: pipenv
    test-tool: pytest
    version: '3.9'
```

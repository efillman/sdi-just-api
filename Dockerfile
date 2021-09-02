FROM registry.il2.dso.mil/platform-one/devops/pipeline-templates/base-image/harden-nodejs14:14.16.1

WORKDIR /app

USER root

RUN node -e "const fs = require('fs');  fs.chown('/home/node/', 950, 950, (error) => {console.log(error)});"

USER appuser

COPY --chown=950:950 . .

EXPOSE 8080

CMD ["/bin/bash", "/app/entrypoint.sh"]
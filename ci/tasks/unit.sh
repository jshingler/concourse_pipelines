#!/bin/sh

set -e # fail fast
set -x # print commands
export TERM=${TERM:-dumb}

export ROOT_FOLDER=$( pwd )
export REPO_RESOURCE=source-code
# export TOOLS_RESOURCE=tools
# export VERSION_RESOURCE=version
export OUTPUT_RESOURCE=out

echo "Root folder is [${ROOT_FOLDER}]"
echo "Repo resource folder is [${REPO_RESOURCE}]"
# echo "Tools resource folder is [${TOOLS_RESOURCE}]"
# echo "Version resource folder is [${VERSION_RESOURCE}]"

. ${ROOT_FOLDER}/ci/tasks/pipeline.sh

echo "Configuring Git"
git status
git config --global core.mergeoptions --no-edit
git config --global user.email "CI@concourse.ci"
git config --global user.name "Concourse.CI"
# git remote -v


echo "Build and Publish to Maven Repo"
cd ${ROOT_FOLDER}/${REPO_RESOURCE}


echo "Install NPM"
echo "========================="
./gradlew npmInstall -PnodeInstall
echo "========================="

# Run Test on unrebased branch
echo "Run Tests and Sonar: ${SONAR}"

#./gradlew -Dsonar.host.url=${SONAR} test sonarqube
./gradlew test -PnodeInstall
echo "dev/$(date '+%Y%m%d%H%M%S')" > tag

# # Rebase Origin Master on this branch and rerun test (Build Acceptance)
# # git merge origin/master
# echo "Rebase master into branch"
# git pull --rebase origin master

# echo "Run Tests on rebase code"
# # Run Test on unrebased branch
# ./gradlew test
# echo "Passed Gate On: $(date)\n" >> README.md

# # git help
# git add README.md
# git commit -m "Dated README"

# # Copy to output areas so it can be pushed back up to repo
# git clone . ../source-code2

echo "=============================="
echo "Build and Publish -- Done"
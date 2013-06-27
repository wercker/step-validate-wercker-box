cd $WERCKER_STEP_ROOT
npm install esprima
node $WERCKER_STEP_ROOT/run.js $WERCKER_SOURCE_DIR/wercker-box.yml
cd $WERCKER_SOURCE_DIR
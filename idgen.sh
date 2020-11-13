# symlink to bin path 
SCRIPT=$(greadlink -f $0)
SCRIPTPATH=`dirname $SCRIPT`
node $SCRIPTPATH/idgen.js

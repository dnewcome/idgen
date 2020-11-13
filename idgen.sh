# symlink to bin path 
SCRIPT=$(readlink $0)
SCRIPTPATH=`dirname $SCRIPT`
node $SCRIPTPATH/idgen.js

#!/bin/bash
if [ -d "/home/coder/project/workspace/app/" ]
then
    echo "project folder present"
    # checking for src folder
    if [ -d "/home/coder/project/workspace/app/" ]
    then
        cp -r /home/coder/project/workspace/jasmine/spec/ /home/coder/project/workspace/app/;
    cd /home/coder/project/workspace/app/ || exit;
    npm install
    npm install --save-dev jasmine
    npx jasmine init
    npm test;
    else
        echo "returns false if name is empty";
        echo "returns false if email is empty";
	    echo "returns false if email is invalid";
        echo "returns false if password is too short";
        echo "returns true if all fields are valid"
    fi
else
        echo "returns false if name is empty";
        echo "returns false if email is empty";
	    echo "returns false if email is invalid";
        echo "returns false if password is too short";
        echo "returns true if all fields are valid"
fi

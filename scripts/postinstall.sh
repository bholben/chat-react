#!/bin/sh

# Until we find a cleaner approach, this is a cheap hack to copy some
# shared React components from npm into the project.  They need to be under
# src for webpack to pick them up and process them into the bundle.  These
# shared components should never be edited in their destination.  The gitignore
# file will keep them away from the remote repo.

mkdir -p src/node_modules/chat-room-component
cp -R ./node_modules/chat-room-component/Chat "$_"

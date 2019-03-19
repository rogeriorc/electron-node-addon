cmake_minimum_required(VERSION 3.9)

SET(CMAKE_CXX_STANDARD 11)
SET(CMAKE_CXX_STANDARD_REQUIRED ON)
SET_PROPERTY(GLOBAL PROPERTY USE_FOLDERS ON)

set(CMAKE_SHARED_LINKER_FLAGS   "${CMAKE_SHARED_LINKER_FLAGS} /DELAYLOAD:node.exe")

project("electron-node-addon")

add_subdirectory(hello_world)
add_subdirectory(context_aware)

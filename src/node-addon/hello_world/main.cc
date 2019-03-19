#include <node.h>

using namespace v8;

void Method(const FunctionCallbackInfo<Value> &args) {
  Isolate *isolate = args.GetIsolate();

  auto value = String::NewFromUtf8(isolate, "world", NewStringType::kNormal).ToLocalChecked();

  args.GetReturnValue().Set(value);
}


void Initialize(Local<Object> exports) {
	NODE_SET_METHOD(exports, "hello", Method);
}

NODE_MODULE(hello_world, Initialize)

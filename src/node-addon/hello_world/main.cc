#include <node.h>

/*
#ifndef NODE_GYP_MODULE_NAME
#define NODE_GYP_MODULE_NAME my_node_addon)
#endif // !NODE_GYP_MODULE_NAME
*/

using namespace v8;

void Method(const FunctionCallbackInfo<Value> &args)
{
  Isolate *isolate = args.GetIsolate();

  auto value = String::NewFromUtf8(isolate, "world", NewStringType::kNormal).ToLocalChecked();

  args.GetReturnValue().Set(value);
}

/*
void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "hello", Method);
}


NODE_MODULE(my_node_addon, Initialize)
*/
NODE_MODULE_INIT(/* exports, module, context */) {
  NODE_SET_METHOD(exports, "hello", Method);
}

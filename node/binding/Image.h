#ifndef IMAGE_H
#define IMAGE_H
#include <napi.h>
#include <curl/curl.h>
#include <vector>
#include "NodeBindingUtil.h"
#include "lodepng.h"


namespace NodeBinding
{
//使用asyncWorker来进行node中的异步调用
class ImageWorker : public Napi::AsyncWorker
{
public:
    ImageWorker(Napi::Env env, std::vector<unsigned char> &out, unsigned int &width, unsigned int &height) : Napi::AsyncWorker(env), _pixels(out),
                                                                                                             _height(height),
                                                                                                             _width(width)
    {
    }

    void Execute();
    void OnOK();
    void OnError(const Napi::Error &e);
    std::string url;
    void setOnErrorCallback(Napi::Function func);
    void setOnLoadCallback(Napi::Function func);

private:
    Napi::FunctionReference onErrorCallback;
    Napi::FunctionReference onLoadCallback;
    std::vector<unsigned char> &_pixels;
   clock_t startTime,endTime;
    unsigned int &_width;
    unsigned int &_height;
    ImageContent content;
};

class Image : public Napi::ObjectWrap<Image>
{
public:
    Image(const Napi::CallbackInfo &info);
    static void Init(Napi::Env env, Napi::Object exports);
    int getWidth();
    int getHeight();
    int textureId=-1;
    std::vector<unsigned char> &getPixels();

private:
    std::vector<unsigned char> pixels;
    static Napi::FunctionReference constructor;
    Napi::Function onLoadCallback;
    Napi::Function onErrorCallback;
    std::string src;
    ImageWorker *mWorker = nullptr;
    unsigned int width = 0;
    unsigned int height = 0;
    Napi::Value getSrc(const Napi::CallbackInfo &info);
    void setSrc(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value getOnLoad(const Napi::CallbackInfo &info);
    void setOnLoad(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value getOnError(const Napi::CallbackInfo &info);
    void setOnError(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value getWidth(const Napi::CallbackInfo &info);
    Napi::Value getHeight(const Napi::CallbackInfo &info);
};
} // namespace NodeBinding

#endif
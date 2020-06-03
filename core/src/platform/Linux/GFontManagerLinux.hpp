#include "GFontManager.h"
#include "GCanvas2dContext.h"
#include <assert.h>
#include "support/Log.h"
#include "GFont.h"
#include "utils.hpp"
#include "GFontCacheLinux.hpp"
#include "support/CharacterSet.h"
#include <stdlib.h>

class GFontManagerImplement : public GFontManager
{
public:
    GFontManagerImplement(unsigned w, unsigned h);

    virtual ~GFontManagerImplement()
    {
        delete mFontCache;
    };

    void DrawText(const unsigned short *text, unsigned int text_length, float x, float y,
                  bool isStroke, GCanvasContext *context, float scaleX = 1, float scaleY = 1) override;

    float MeasureText(const char *text, unsigned int text_length, gcanvas::GFontStyle *fontStyle) override;

    //空实现
    float *MeasureTextExt(const char *text, unsigned int text_length, gcanvas::GFontStyle *fontStyle) override
    {
        return nullptr;
    }

    //空实现
    float *PreMeasureTextHeight(const char *text, unsigned int text_length, GCanvasContext *context) override
    {
        return nullptr;
    }

    GTexture *GetOrCreateFontTexture() override;

private:
    void adjustTextPenPoint(GCanvasContext *context, std::vector<GFont *> font,
                            const unsigned short *text,
                            unsigned int textLength,
                            bool isStroke,
                            float &x, float &y, float sx, float sy);

    GFont *GetFontByCharCode(GCanvasContext *context, wchar_t charCode, gcanvas::GFontStyle *fontStyle);

    void DrawTextInternal(GCanvasContext *context, GFont *font, bool isStroke, wchar_t text,
                          float &x, float y, float sx, float sy);
    GFontCache *mFontCache = nullptr;
};
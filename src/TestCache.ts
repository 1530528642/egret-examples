/**
 * Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

class TestCache {

    public getDescription():string {
        return "这个项目展示了Bitmap的Cache";
    }

    public createExample():void {
        var container = new ns_egret.DisplayObjectContainer();
        ns_egret.MainContext.instance.stage.addChild(container);
        var texture = RES.getRes("daisy_png");
//    container.width = container.height = 1000;


        var text = new ns_egret.TextField();
        text.text = "HelloWorld";
//    container.addChild(text);
        text.x = text.y = 150;
        text.width = text.height = 100;


        var bitmap = new ns_egret.Bitmap();
        bitmap.texture = texture;
        container.addChild(bitmap);
        bitmap.x = bitmap.y = 150;

        container.cacheAsBitmap(true);
//    text.cacheAsBitmap(true);
    }
}
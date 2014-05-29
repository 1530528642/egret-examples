/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/// <reference path="AssetAdapter.ts"/>
/// <reference path="egret.d.ts"/>
/// <reference path="skins/ItemRendererSkin.ts"/>
/// <reference path="skins/ListSkin.ts"/>

class GUIExplorer extends egret.DisplayObjectContainer{

    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    public onAddToStage(event:egret.Event):void{
        //注入自定义的素材解析器
        egret.Injector.mapClass("egret.IAssetAdapter",AssetAdapter);

        //启动RES资源加载模块
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onGroupComp,this);
        RES.loadConfig("resources/resource.json","resources/");
        RES.loadGroup("preload");
    }

    public onGroupComp(event:RES.ResourceEvent):void{
        if(event.groupName=="preload"){
           this.createExporer();
        }
    }

    public createExporer():void{
        //实例化GUI根容器
        var uiStage:egret.UIStage = new egret.UIStage();
        this.addChild(uiStage);

        var asset:egret.UIAsset = new egret.UIAsset();
        asset.source = "header-background";
        asset.fillMode = egret.BitmapFillMode.REPEAT;
        asset.percentWidth = 100;
        asset.height = 90;
        uiStage.addElement(asset);

        var title:egret.Label = new egret.Label();
        title.text = "Egret GUI";
        title.fontFamily = "Tahoma";
        title.textColor = 0xe4e4e4;
        title.size = 35;
        title.horizontalCenter = 0;
        title.top = 25;
        uiStage.addElement(title);

        var list:egret.List = new egret.List();
        list.skinName = ListSkin;
        list.itemRendererSkinName = ItemRendererSkin;
        list.percentWidth = 100;
        list.top = 90;
        list.bottom = 0;
        uiStage.addElement(list);

        var screens:Array<string> = RES.getRes("screens");
        list.dataProvider = new egret.ArrayCollection(screens);
    }
}
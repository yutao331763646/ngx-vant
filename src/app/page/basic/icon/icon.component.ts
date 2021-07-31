import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { cardWrapper } from 'src/app/common/card-wrapper';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

    private _readMe: HTMLElement | string = '';
    @Input() set readMe(readMe: HTMLElement | string) {
        this._readMe = readMe;
    }
    get readMe() {
        return cardWrapper(this._readMe);
    }

    cards = [{
        title: '介绍',
        desc: this.sanitizer.bypassSecurityTrustHtml('基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 <code>icon</code> 属性引用。')

    }, {
        title: '引入',
        code:
            `  import IconModule from 'VantModule'; `
    }]
    cards2 = [
        {
        title: '基础用法',
        desc:this.sanitizer.bypassSecurityTrustHtml('<code>Icon</code> 的 <code>name</code> 属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例。') ,
        code: 
`  <van-icon name="chat-o"></van-icon>
  <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" ></van-icon> `
    },
    {
        title: '徽标提示',
        desc:this.sanitizer.bypassSecurityTrustHtml('设置 <code>dot</code> 属性后，会在图标右上角展示一个小红点；设置 <code>badge</code> 属性后，会在图标右上角展示相应的徽标。') ,
        code: 
`  <van-icon name="chat-o" [dot]="true"></van-icon>
  <van-icon name="chat-o" badge="9"></van-icon>
  <van-icon name="chat-o" badge="99+"></van-icon> `
    },
    {
        title: '图标颜色',
        desc:this.sanitizer.bypassSecurityTrustHtml('<code>Icon</code> 的 <code>color</code> 属性用来设置图标的颜色。') ,
        code: 
`  <van-icon name="cart-o" color="#1989fa"></van-icon>
  <van-icon name="fire-o" color="#ee0a24"></van-icon> `
    },
    {
        title: '图标大小',
        desc:this.sanitizer.bypassSecurityTrustHtml('<code>Icon</code> 的 <code>size</code> 属性用来设置图标的尺寸大小，默认单位为 <code>px</code>。') ,
        code: 
`  <van-icon name="chat-o" size="40"></van-icon>
  <van-icon name="chat-o" size="3rem"></van-icon>`
    },
    {
        title: '使用本地字体文件',
        desc:this.sanitizer.bypassSecurityTrustHtml('Icon 组件默认引用有赞 CDN 提供的字体文件，并通过网络下载。如果需要在项目中使用本地字体文件，请引入下面的 CSS 文件，并在项目中配置 <code>url-loader</code>。') ,
        code: 
`  import 'vant/lib/icon/local.css';`
    },
    {
        title: '自定义图标',
        desc:this.sanitizer.bypassSecurityTrustHtml('如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。') ,
        code: 
`  /* 引入第三方或自定义的字体图标样式 */
  @font-face {
    font-family: 'my-icon';
    src: url('./my-icon.ttf') format('truetype');
  }

  .my-icon {
    font-family: 'my-icon';
  }

  .my-icon-extra::before {
    content: '\e626';
  }`
    },
    {
        code: 
`  <!-- 通过 class-prefix 指定类名为 my-icon -->
  <van-icon class-prefix="my-icon" name="extra" ></van-icon>`
    },
]
  constructor( private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.setReadMe()
}
setReadMe() {
    this.readMe = require(`!html-loader!markdown-loader!./README.zh-CN.md`).default;
}
}

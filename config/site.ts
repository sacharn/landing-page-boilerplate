import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = 'https://www.xiaohongshu.com/user/profile/67b97b330000000008015be5'

const baseSiteConfig = {
  name: "晴野花时",
  description:
    "晴野花时，帮助都市人打造属于自己的一平米花园",
  url: "https://sunnywild.cn",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: '/',
  keywords: ["晴野花时", "一平米花园", "诗意栖居", "都市生活"],
  authors: [
    {
      name: "sunnywild",
      url: "https://sunnywild.cn",
      twitter: 'https://www.xiaohongshu.com/user/profile/67b97b330000000008015be5',
    }
  ],
  creator: '@sunnywild',
  openSourceURL: 'https://www.xiaohongshu.com/user/profile/67b97b330000000008015be5',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  headerLinks: [
    // { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    { name: 'xiaohongshu', href: "https://www.xiaohongshu.com/user/profile/67b97b330000000008015be5", icon: BsTwitterX },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/sunnywild", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:sacharn@163.com", icon: MdEmail },
    { name: 'xiaohongshu', href: "https://www.xiaohongshu.com/user/profile/67b97b330000000008015be5", icon: BsTwitterX },
    // { name: 'github', href: "https://github.com/weijunext/", icon: BsGithub },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee },
    // { name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin },
    // { name: 'weChat', href: "https://weijunext.com/make-a-friend", icon: BsWechat }
  ],
  footerProducts: [
    // { url: 'https://phcopilot.ai/', name: 'Product Hunt Copilot' },
    // { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    // { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    // { url: 'https://weijunext.com/', name: 'J实验室' },
    // { url: 'https://nextjscn.org/', name: 'Next.js 中文文档' },
    // { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    // { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}

"use strict";(self.webpackChunkrdk_documentation=self.webpackChunkrdk_documentation||[]).push([[475],{5487:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"RDK V/Architecture","title":"Architecture","description":"RDK Video (RDK-V) Architecture is designed to enable service providers and device manufacturers to develop and deploy innovative video applications, services, and user experiences. It consists of several key components that work together seamlessly to provide a robust video platform.","source":"@site/docs/RDK V/Architecture.md","sourceDirName":"RDK V","slug":"/RDK V/Architecture","permalink":"/docs/RDK V/Architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RDK V/Architecture.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","next":{"title":"Overview","permalink":"/docs/RDK V/Overview"}}');var r=n(4848),a=n(8453);const s={},o=void 0,c={},l=[{value:"Evolution of RDK",id:"evolution-of-rdk",level:2},{value:"Architecture Details",id:"architecture-details",level:2},{value:"Application Scenario",id:"application-scenario",level:2},{value:"Useful Links",id:"useful-links",level:2}];function d(e){const i={a:"a",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"RDK Video (RDK-V) Architecture is designed to enable service providers and device manufacturers to develop and deploy innovative video applications, services, and user experiences. It consists of several key components that work together seamlessly to provide a robust video platform."}),"\n",(0,r.jsx)(i.p,{children:"By leveraging the pluggable architecture of RDK-V, a variety of target device profiles can be supported, ranging from a basic IP streaming  video platform to a full-fledged TV."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/IP",children:"IP"})," provides a common method to manage video playback functions. The IP client device serves as an interface and receives video content from an in-home gateway device or from an external media server."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/Hybrid",children:"Hybrid"})," is an IP video platform device with capabilities such as tuning and conditional access for its video delivery to manage hybrid video functions."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/TV",children:"TV"})," is an open-source smart TV profile that allows manufacturers and operations to build RDK-based TV and video solutions."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["RDK Hybrid TV is a combination of ",(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/TV",children:"TV"})," plus ",(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/Hybrid",children:"Hybrid"})," capabilities"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"evolution-of-rdk",children:"Evolution of RDK"}),"\n",(0,r.jsx)(i.p,{children:"From RDK6, RDK-V shifted from quarterly to annual release cycles. This annual RDK release aims to synchronize RDK-V with standard industry release practices while comprehensively addressing shared challenges within the community. This approach facilitates the smoother and more consistent adoption of newly contributed features, utilizing the latest releases from technology partners. By aligning with SoC partners, the release enables better resource planning to support core RDK-V platforms. Furthermore, the RDK-V release aligns with SoC, OEM, and app releases,\r\nfostering a more cohesive and efficient ecosystem."}),"\n",(0,r.jsxs)(i.p,{children:["The first annual release is RDK6, and its release notes can be accessed from ",(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK6+Release+Notes",children:"here"})]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"RDK Evolution!",src:n(2609).A+"",width:"891",height:"241"})}),"\n",(0,r.jsx)(i.h2,{id:"architecture-details",children:"Architecture Details"}),"\n",(0,r.jsx)(i.p,{children:"Below is an illustrative representation of the RDK-V software stack, depicting the various components and their interactions."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Architecture!",src:n(8261).A+"",width:"751",height:"364"})}),"\n",(0,r.jsx)(i.p,{children:"At its core, RDK-V consists of five main stack levels, each serving a specific purpose in the overall architecture. These levels are as follows:"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)("h3",{children:"Applications"}),"\r\nThe application layer primarily focuses on the end-user experience. This layer contains applications that provide various services, content, and features to the users. While the RDK-V ecosystem is continuously evolving, supported applications typically include popular ",(0,r.jsx)(i.strong,{children:"OTT services"})," like Netflix, Amazon Prime Video, and YouTube, alongside native broadcaster applications and other services."]}),"\n",(0,r.jsx)("h3",{children:"Application Platform"}),"\n",(0,r.jsxs)(i.p,{children:["The Application Platform Layer in the RDK-V ecosystem offers essential tools for developers to create applications. It includes components like a UI framework, HTML5 rendering engine, and a JavaScript runtime. This layer acts as a communication channel, serving as a middleware between applications and core RDK-V services. In the RDK-V framework, ",(0,r.jsx)(i.a,{href:"https://rdkcentral.github.io/firebolt/apis/latest/",children:"Firebolt\xae"})," handles UI rendering and user input, enabling extensive customization. ",(0,r.jsx)(i.a,{href:"https://lightningjs.io/docs/#/what-is-lightning/index",children:"Lightning\u2122"}),", an open-source JavaScript platform, manages the application lifecycle and integrates components using WebGL for rendering. Together, Firebolt\xae and Lightning\u2122 form a robust foundation for seamless and efficient application development in the RDK-V ecosystem."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)("h4",{children:"Firebolt\xae 1.0 (Ripple)"}),"\r\nFirebolt\xae 1.0 (Ripple) streamlines RDK-V app integration with standardized rules. Ripple, its open-source Rust-based Application gateway, facilitates dynamic extensions and serves as a Firebolt\xae gateway. RDK 6 is Firebolt\xae 1.0-certified, with a comprehensive test suite for compliance."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)("h4",{children:"Security"})," - The Application Platform Layer ensures robust security with Dobby-managed containerization , leveraging Linux kernel features for process isolation. Downloadable Application Containers (DAC) enable the secure running of binary applications on video platforms without modification, ensuring compatibility across RDK 6 devices. Access control is enforced through AppArmor, a proactive Linux security system. RDKM's open-sourced AppArmor profile generator tool for RDK 6 provides fine-grained control over process resources, contributing to a secure environment."]}),"\n",(0,r.jsx)("h3",{children:"Middleware"}),"\n",(0,r.jsxs)(i.p,{children:["Serving as a vital bridge between the Application Platform Layer and the hardware (HAL), the RDK Middleware Layer incorporates essential components that are pivotal for the seamless operation of the RDK-V platform. Core to this layer are ",(0,r.jsx)(i.em,{children:"RDK services"}),", providing JSON-RPC services for interactive applications. In the realm of security, iCrypto handles critical cryptographic operations, ensuring secure communication and data protection. Rialto offers a secure solution for AV pipelines in containerized applications, and the Window Manager orchestrates GUI layout. Device management enables streamlined operations in RDK deployments, including bulk operations and firmware downloads. XCONF integration revolutionizes code downloads for a smoother deployment experience. Log uploads aid in comprehensive debugging, offering insights into system performance. RDK Feature Control (RFC) enables dynamic feature management for enhanced flexibility. Telemetry systematically collects essential data insights, while WebPA ensures secure communication between cloud servers and RDK devices. The Media Player, crucial for local rendering devices, manages various pipeline functions, supporting IP and QAM playback. The Open Content Decryption Module(OCDM) enforces Digital Rights Management (DRM) policies. Together with other RDK-V elements, these components ensure the efficient and secure functioning of the RDK-V platform."]}),"\n",(0,r.jsx)("h3",{children:"HAL (Hardware Abstraction Layer)"}),"\n",(0,r.jsx)(i.p,{children:"In the RDK-V stack, the HAL layer plays a vital role in facilitating communication between the video application software and hardware components like the GPU, video encoding/decoding hardware, and audio devices. It provides a standardized framework for functions, data structures, and protocols, enabling efficient hardware resource utilization. The HAL layer manages hardware initialization, input/output operations, and hardware-specific events, shielding software developers from hardware complexities and allowing them to prioritize user experience and functionality."}),"\n",(0,r.jsxs)(i.p,{children:["RDK-V provides a set of HAL APIs that abstract the platform from RDK. Vendors need to implement the HAL APIs to meet the HAL specifications. With the help of the HAL API specification for different RDK-V components, vendors can successfully port RDK-V to their platform. Depending on the device profile ( ",(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/IP",children:"IP"}),", ",(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/Hybrid",children:"Hybrid"}),", ",(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/TV",children:"TV"}),"  etc.), vendors may choose the relevant components and perform the port by implementing the HAL layer. For more details on the vendor porting process, refer to the ",(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/Vendor+Porting+Guide",children:"Vendor Porting Guide"})]}),"\n",(0,r.jsx)("h3",{children:"SOC"}),"\n",(0,r.jsx)(i.p,{children:"The System on Chip (SOC) layer forms the foundational interface between hardware components, ensuring system security and reliability. It incorporates various crucial elements, such as DRM Libraries, which manage digital rights and secure content delivery to prevent unauthorized access and distribution. Trusted Applications (Apps TA) guarantee the secure execution of sensitive operations and protect critical data from unauthorized access. The Secure Store oversees the storage of DRM keys and apps triplets, maintaining the confidentiality and integrity of vital data. Additionally, MFR Libraries manage hardware functionality, providing access to specific hardware features and capabilities, thereby contributing to the overall security and functionality of the system."}),"\n",(0,r.jsx)(i.h2,{id:"application-scenario",children:"Application Scenario"}),"\n",(0,r.jsx)(i.p,{children:"Consider the use case of a user accessing a streaming application like Youtube on an RDK Video-supported device. The user interacts with the application through the Application Layer, selecting content and initiating playback. The Application Platform Layer, utilizing the Firebolt\xae and Lightning\u2122 frameworks, manages the user interface and application lifecycle. The RDK-V Layer ensures seamless communication between the application and the hardware, managing services, cryptographic operations, inter-component communication, window management, and content decryption through OpenCDM. The RDK HAL Layer then utilizes the Gstreamer media pipeline to decode and render the video content, ensuring a smooth and high-quality viewing experience. Finally, the SOC Layer provides a secure environment for the entire system, safeguarding the hardware, managing DRM policies, and securing sensitive data, ensuring a secure and reliable video streaming experience for the user."}),"\n",(0,r.jsx)(i.h2,{id:"useful-links",children:"Useful Links"}),"\n",(0,r.jsx)("h4",{children:"RDK-V"}),"\n",(0,r.jsxs)(i.p,{children:["You can find an overview of the RDK-V platform, detailing its key features and functionalities at ",(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK+Video+Documentation",children:"RDK Video Documentation"})]}),"\n",(0,r.jsx)("h4",{children:"Applications"}),"\n",(0,r.jsxs)(i.p,{children:["To get the information about various applications supported by the RDK-V, aiding in understanding the diverse application landscape refer ",(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK+Video+Accelerator+-+Applications",children:"RDK Video Accelerator - Applications"})]}),"\n",(0,r.jsx)("h4",{children:"Application Development"}),"\n",(0,r.jsxs)(i.p,{children:["Developers interested in RDK-V application development using Firebolt\xae can refer ",(0,r.jsx)(i.a,{href:"https://rdkcentral.github.io/firebolt/apis/latest/",children:"Firebolt\xae Overview"}),"\r\nDevelopers interested in RDK-V application development using Lightning\u2122 - the inhouse JavaScript framework - can refer ",(0,r.jsx)(i.a,{href:"https://lightningjs.io/docs/#/what-is-lightning/index",children:"Lightning\u2122 Framework"})]}),"\n",(0,r.jsx)("h4",{children:"Security"}),"\n",(0,r.jsxs)(i.p,{children:["Understanding the concept of containerization in RDK-V is crucial for ensuring secure and efficient application deployment, and the ",(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/Containerization+in+RDK",children:"Containerization in RDK"})," document provides in-depth insights into this aspect."]}),"\n",(0,r.jsxs)(i.p,{children:["To learn about the implementation and benefits of Downloadable Application Containers (DAC) within the RDK-V ecosystem, the ",(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/pages/viewpage.action?pageId=113967683",children:"DAC Documentation"})," offers comprehensive guidance for developers."]}),"\n",(0,r.jsxs)(i.p,{children:["For insight into the Access Control Mechanism in RDK-V using AppArmor, developers can refer to the ",(0,r.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/Mandatory+Access+Control+in+RDK+using+AppArmor",children:"AppArmor Documentation"})," to understand how to enforce security policies and restrict application access within the RDK-V environment."]})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8261:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/rdkv_architecture_architecture-cc6378761de2f73c33fc46cdff604ebb.png"},2609:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/rdkv_architecture_evolution-762fb3e5a044019a89bbdd6be323b846.png"},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>o});var t=n(6540);const r={},a=t.createContext(r);function s(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);
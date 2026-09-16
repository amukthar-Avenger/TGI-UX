import svgPaths from "./svg-304ixny3ej";
type PaginationNumberProps = {
  className?: string;
  digits?: "1";
  type?: "Default" | "Selected";
};

function PaginationNumber({ className, digits = "1", type = "Default" }: PaginationNumberProps) {
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex items-start relative size-full">
        <div className="relative shrink-0 w-[32px]" data-name="Subtle button">
          <div className="content-stretch flex items-start relative size-full">
            <div className={`flex-[1_0_0] h-[24px] min-w-px relative rounded-[4px] ${type === "Selected" && digits === "1" ? "bg-[#dadfe6]" : ""}`} data-name="container">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#313233] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SeveritySystemStatusMajor({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[16px]"} data-name="severity_system-status-major">
      <div className="absolute inset-[6.25%_6.25%_2.13%_6.25%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="14.66" preserveAspectRatio="none" viewBox="0 0 14 14.66" width="14">
          <path d={svgPaths.p3a02be80} fill="#E86100" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[43.75%] right-[43.75%] top-1/4" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 2 8" width="2">
          <g id="Group">
            <path d={svgPaths.p2bcc900} fill="white" id="Vector" />
            <path d={svgPaths.p3a710a80} fill="white" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SeveritySystemStatusMinor({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[16px]"} data-name="severity_system-status-minor">
      <div className="absolute flex inset-[0.02%_0.04%_0.02%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(50cqw,50cqh)] w-[hypot(50cqw,-50cqh)]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="11.31" preserveAspectRatio="none" viewBox="0 0 11.31 11.31" width="11.31">
              <path d={svgPaths.p1fe31680} fill="#C08B19" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[43.75%] right-[43.75%] top-1/4" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 2 8" width="2">
          <g id="Group">
            <path d={svgPaths.p2bcc900} fill="white" id="Vector" />
            <path d={svgPaths.p3a710a80} fill="white" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SeveritySystemStatusNone({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[16px]"} data-name="severity_system-status-none">
      <div className="absolute inset-[6.25%]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
          <path clipRule="evenodd" d={svgPaths.p3296bc80} fill="#7E8794" fillRule="evenodd" id="icon" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.09px)] size-[6.906px] top-[calc(50%+0.16px)]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" height="6.90601" preserveAspectRatio="none" viewBox="0 0 6.90601 6.90601" width="6.90601">
          <path d={svgPaths.p8394080} fill="white" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function SeveritySystemStatusCritical({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[16px]"} data-name="severity_system-status-critical">
      <div className="absolute inset-[6.25%_1.31%_6.19%_1.31%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="14.01" preserveAspectRatio="none" viewBox="0 0 15.58 14.01" width="15.58">
          <path d={svgPaths.p2b5d7f00} fill="#B50600" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[43.75%] right-[43.75%] top-1/4" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 2 8" width="2">
          <g id="Group">
            <path d={svgPaths.p2bcc900} fill="white" id="Vector" />
            <path d={svgPaths.p3a710a80} fill="white" id="Vector_2" />
          </g>
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[43.75%] right-[43.75%] top-1/4" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 2 8" width="2">
          <g id="Group">
            <path d={svgPaths.p2bcc900} fill="white" id="Vector" />
            <path d={svgPaths.p3a710a80} fill="white" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type SeveritySystemStatusProps = {
  className?: string;
  severity?: "Critical" | "Major" | "Minor" | "None";
};

function SeveritySystemStatus({ className, severity = "Critical" }: SeveritySystemStatusProps) {
  return (
    <div className={className || "relative size-[16px]"}>
      {severity === "Critical" && <SeveritySystemStatusCritical className="absolute inset-0 overflow-clip" />}
      {severity === "None" && <SeveritySystemStatusNone className="absolute inset-0 overflow-clip" />}
      {severity === "Minor" && <SeveritySystemStatusMinor className="absolute inset-0 overflow-clip" />}
      {severity === "Major" && <SeveritySystemStatusMajor className="absolute inset-0 overflow-clip" />}
    </div>
  );
}
type HelpMenuProps = {
  className?: string;
  menuExpanded?: "No";
};

function HelpMenu({ className, menuExpanded = "No" }: HelpMenuProps) {
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex items-start relative size-full">
        <div className="relative shrink-0" data-name="Subtle button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center relative size-full">
              <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="container">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_help-circle">
                  <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                    <g id="Union">
                      <path d={svgPaths.p1940dee2} fill="#313233" />
                      <path clipRule="evenodd" d={svgPaths.p68eee80} fill="#313233" fillRule="evenodd" />
                    </g>
                  </svg>
                  <div className="absolute inset-[71.25%_45.94%_20.94%_46.25%]">
                    <svg className="absolute block inset-0 size-full" fill="none" height="1.25" preserveAspectRatio="none" viewBox="0 0 1.25 1.25" width="1.25">
                      <circle cx="0.625" cy="0.625" fill="#313233" id="Ellipse 2609" r="0.625" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type SlideInSearchControlProps = {
  className?: string;
  searchToggled?: "False";
};

function SlideInSearchControl({ className, searchToggled = "False" }: SlideInSearchControlProps) {
  return (
    <div className={className || "relative w-[512px]"}>
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end relative size-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="trigger">
            <div className="relative shrink-0" data-name="Search action">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="container">
                    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_search">
                      <div className="absolute left-px size-[14.439px] top-px" data-name="Union">
                        <svg className="absolute block inset-0 size-full" fill="none" height="14.4391" preserveAspectRatio="none" viewBox="0 0 14.4391 14.4391" width="14.4391">
                          <path clipRule="evenodd" d={svgPaths.p3b27cc00} fill="#313233" fillRule="evenodd" id="Union" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-end left-0 right-0 top-1/2" data-name="search field area">
            <div className="drop-shadow-[0px_2px_3px_rgba(0,0,0,0.06)] h-[40px] opacity-0 relative shrink-0 w-0" data-name="Hero search">
              <div className="content-stretch flex items-start relative size-full">
                <div className="bg-white flex-[1_0_0] h-[40px] min-w-px opacity-0 relative rounded-[22px]" data-name="container">
                  <div aria-hidden className="absolute border border-[#004af0] border-solid inset-0 pointer-events-none rounded-[22px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center pl-[4px] pr-[16px] py-[4px] relative size-full">
                      <div className="content-stretch flex h-full items-center pr-[4px] relative shrink-0" data-name="wrapper">
                        <div className="relative shrink-0" data-name=".search-control">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="relative shrink-0" data-name="Subtle button">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[16px] shrink-0" data-name="container">
                                    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_chevron-large-right">
                                      <div className="absolute inset-[12.5%_26.83%_12.5%_31.25%]" data-name="Union">
                                        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 6.70711 12" width="6.70711">
                                          <path clipRule="evenodd" d={svgPaths.pb7bc700} fill="#313233" fillRule="evenodd" id="Union" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0" data-name=".search-control/Disabled">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="relative shrink-0" data-name="Subtle button">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center relative size-full">
                                <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[16px] shrink-0" data-name="container">
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_search">
                                    <div className="absolute left-px size-[14.439px] top-px" data-name="Union">
                                      <svg className="absolute block inset-0 size-full" fill="none" height="14.4391" preserveAspectRatio="none" viewBox="0 0 14.4391 14.4391" width="14.4391">
                                        <path clipRule="evenodd" d={svgPaths.p3b27cc00} fill="#64707C" fillRule="evenodd" id="Union" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[6px] shrink-0" data-name="container">
      <div className="relative shrink-0 size-[24px]" data-name=".hamburger_control/.icon_hamburger">
        <div className="-translate-x-1/2 absolute bottom-[20.83%] left-1/2 top-[20.83%] w-[16px]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 16 14" width="16">
            <g id="Union">
              <path d={svgPaths.p4a3a300} fill="#313233" />
              <path d={svgPaths.p4608d40} fill="#313233" />
              <path d={svgPaths.p14e7e940} fill="#313233" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic opacity-65 relative shrink-0 text-[12px] text-black whitespace-nowrap" dir="auto">
        2x.x
      </p>
    </div>
  );
}

function ProductName() {
  return (
    <div className="content-stretch flex gap-[6px] items-baseline relative shrink-0 w-[310px]" data-name="Product name">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.36px] whitespace-nowrap" dir="auto">
        Trading Grid Intelligence
      </p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic opacity-65 relative shrink-0 text-[18px] text-black tracking-[-0.36px] whitespace-nowrap" dir="auto">
        Chargeback Avoidance Platform
      </p>
      <Frame />
    </div>
  );
}

function LogoProductNameLockup() {
  return (
    <div className="h-full relative shrink-0" data-name="Logo + product name lockup">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center py-[6px] relative size-full">
          <div className="h-[20px] relative shrink-0 w-[26px]" data-name="OT logo">
            <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 26 20" width="26">
              <g id="OT logo">
                <path d={svgPaths.p27cdcdc0} fill="#1A6AFF" />
                <path d={svgPaths.p2382b8c0} fill="#1A6AFF" />
              </g>
            </svg>
          </div>
          <ProductName />
        </div>
      </div>
    </div>
  );
}

function LeftArea() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center pr-[10px] relative shrink-0" data-name="Left area">
      <div className="relative shrink-0" data-name=".hamburger_control">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Container />
          </div>
        </div>
      </div>
      <LogoProductNameLockup />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_notification">
        <div className="absolute inset-[0_6.55%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 13.9039 16" width="13.9039">
            <path clipRule="evenodd" d={svgPaths.pce35180} fill="#313233" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Indicator() {
  return <div className="absolute h-[16px] right-[-6px] top-[2px] w-[26px]" data-name="Indicator" />;
}

function RightArea() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="right area">
      <div className="relative shrink-0" data-name=".nav_toolbar">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-end relative size-full">
            <SlideInSearchControl className="relative shrink-0 w-[512px]" />
            <div className="relative shrink-0 w-[32px]" data-name="Notifications control">
              <div className="content-stretch flex flex-col items-start relative size-full">
                <div className="relative shrink-0 w-full" data-name="Subtle button">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <Container1 />
                    </div>
                  </div>
                </div>
                <Indicator />
              </div>
            </div>
            <HelpMenu className="relative shrink-0" />
          </div>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[12px] shrink-0 size-[24px]" data-name="User menu button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Initials">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
            <circle cx="12" cy="12" fill="#763BDC" id="Ellipse 12" r="12" />
          </svg>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-1/2 not-italic text-[11px] text-center text-white top-[calc(50%-7px)] w-[24px]">AA</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#ebeff5] h-[125px] mb-[-12px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="container">
      <div className="relative shrink-0 size-[16px]" data-name="icon_filter">
        <div className="absolute inset-0 overflow-clip" data-name="icon">
          <div className="absolute inset-[6.25%_6.01%_3.85%_6.01%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="14.3833" preserveAspectRatio="none" viewBox="0 0 14.076 14.3833" width="14.076">
              <path clipRule="evenodd" d={svgPaths.p38ed6df0} fill="#313233" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftActionToolbar() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Left Action Toolbar">
      <div className="relative shrink-0" data-name="Subtle button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Container3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerTitleFrame() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container title frame">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[18px] text-center tracking-[-0.36px] whitespace-nowrap">
          <p className="leading-[22px]">Issues</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="container">
      <div className="relative shrink-0 size-[16px]" data-name="icon_settings">
        <div className="absolute inset-0 overflow-clip" data-name="icon">
          <div className="absolute inset-[0.03%_-0.02%_-0.02%_0.03%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="15.9994" preserveAspectRatio="none" viewBox="0 0 15.9994 15.9994" width="15.9994">
              <g id="Union">
                <path clipRule="evenodd" d={svgPaths.p2f14a000} fill="#313233" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p69d2100} fill="#313233" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightActionToolbar() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Right Action Toolbar">
      <div className="relative shrink-0" data-name="Subtle button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Container4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftActionToolbar />
          <div className="flex-[1_0_0] min-w-px relative" data-name="Container Name">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] relative size-full">
                <ContainerTitleFrame />
              </div>
            </div>
          </div>
          <RightActionToolbar />
        </div>
      </div>
    </div>
  );
}

function StandardTableHeaderBulkSelection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Standard Table Header+Bulk Selection">
      <Container2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellHeader() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="table-cell/header">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="relative shrink-0" data-name=".base-checkbox">
            <div className="content-stretch flex items-start p-[4px] relative size-full">
              <div className="relative shrink-0" data-name=".checkbox_control">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center p-px relative size-full">
                    <Container5 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container6 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell1() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container7 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell2() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container8 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell3() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container9 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell4() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center relative size-full">
                <div className="relative shrink-0 z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container10 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell5() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container11 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell6() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container12 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell7() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container13 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell8() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex isolate items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0 z-[1]" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container14 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell9() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container15 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell10() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container16 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell11() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container17 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell12() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container18 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell13() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container19 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell14() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container20 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell15() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container21 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell16() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container22 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell17() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container23 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell18() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container24 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell19() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container25 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell20() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container26 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell21() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container27 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell22() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container28 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell23() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container29 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[14px]" data-name="container">
      <div aria-hidden className="absolute border border-[#565f6b] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[14px]" data-name=".icon_checkmark-select">
          <div className="absolute h-[6.509px] left-[2.88px] top-[3.75px] w-[8.25px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path clipRule="evenodd" d={svgPaths.p1e3a2500} fill="#313233" fillRule="evenodd" id="Union" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseCell24() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-[32px] min-h-[24px] relative shrink-0" data-name=".checkbox-content">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center min-h-[inherit] relative size-full">
                <div className="h-full relative shrink-0 w-[24px] z-[2]" data-name=".base-checkbox">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="relative shrink-0" data-name=".checkbox_control">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-px relative size-full">
                            <Container30 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[-8px] top-0 w-[1928px] z-[1]" data-name=".state-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="content">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#47484a] text-[12px] text-ellipsis whitespace-nowrap">Puchase order (PO)</p>
    </div>
  );
}

function TableCellHeader1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="table-cell/header">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04322</p>
      </div>
    </div>
  );
}

function BaseCell25() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04323</p>
      </div>
    </div>
  );
}

function BaseCell26() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">WM-12444</p>
      </div>
    </div>
  );
}

function BaseCell27() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">WM-12445</p>
      </div>
    </div>
  );
}

function BaseCell28() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">WM-12446</p>
      </div>
    </div>
  );
}

function BaseCell29() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">WM-12447</p>
      </div>
    </div>
  );
}

function BaseCell30() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text5 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">WM-12448</p>
      </div>
    </div>
  );
}

function BaseCell31() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text6 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04324</p>
      </div>
    </div>
  );
}

function BaseCell32() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text7 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04325</p>
      </div>
    </div>
  );
}

function BaseCell33() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text8 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">HD-04326</p>
      </div>
    </div>
  );
}

function BaseCell34() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text9 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">HD-04327</p>
      </div>
    </div>
  );
}

function BaseCell35() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text10 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04328</p>
      </div>
    </div>
  );
}

function BaseCell36() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text11 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04329</p>
      </div>
    </div>
  );
}

function BaseCell37() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text12 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04330</p>
      </div>
    </div>
  );
}

function BaseCell38() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text13 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04331</p>
      </div>
    </div>
  );
}

function BaseCell39() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text14 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04332</p>
      </div>
    </div>
  );
}

function BaseCell40() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text15 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04333</p>
      </div>
    </div>
  );
}

function BaseCell41() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text16 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">KR-04334</p>
      </div>
    </div>
  );
}

function BaseCell42() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text17 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">KR-04335</p>
      </div>
    </div>
  );
}

function BaseCell43() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text18 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">KR-04336</p>
      </div>
    </div>
  );
}

function BaseCell44() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text19 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04337</p>
      </div>
    </div>
  );
}

function BaseCell45() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text20 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04338</p>
      </div>
    </div>
  );
}

function BaseCell46() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text21 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04339</p>
      </div>
    </div>
  );
}

function BaseCell47() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text22 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04340</p>
      </div>
    </div>
  );
}

function BaseCell48() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text23 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">AMZ-04341</p>
      </div>
    </div>
  );
}

function BaseCell49() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text24 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="content">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#47484a] text-[12px] text-ellipsis whitespace-nowrap">Document ID</p>
    </div>
  );
}

function TableCellHeader2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="table-cell/header">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-850-20260217-001234</p>
      </div>
    </div>
  );
}

function BaseCell50() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text25 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-850-20260217-001235</p>
      </div>
    </div>
  );
}

function BaseCell51() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text26 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-850-20260217-001236</p>
      </div>
    </div>
  );
}

function BaseCell52() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text27 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-850-20260217-001237</p>
      </div>
    </div>
  );
}

function BaseCell53() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text28 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-856-20260217-001227</p>
      </div>
    </div>
  );
}

function BaseCell54() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text29 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001226</p>
      </div>
    </div>
  );
}

function BaseCell55() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text30 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001225</p>
      </div>
    </div>
  );
}

function BaseCell56() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text31 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001224</p>
      </div>
    </div>
  );
}

function BaseCell57() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text32 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-856-20260217-001223</p>
      </div>
    </div>
  );
}

function BaseCell58() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text33 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001222</p>
      </div>
    </div>
  );
}

function BaseCell59() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text34 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001221</p>
      </div>
    </div>
  );
}

function BaseCell60() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text35 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001222</p>
      </div>
    </div>
  );
}

function BaseCell61() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text36 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001221</p>
      </div>
    </div>
  );
}

function BaseCell62() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text37 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001220</p>
      </div>
    </div>
  );
}

function BaseCell63() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text38 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001219</p>
      </div>
    </div>
  );
}

function BaseCell64() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text39 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-856-20260217-001218</p>
      </div>
    </div>
  );
}

function BaseCell65() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text40 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-856-20260217-001217</p>
      </div>
    </div>
  );
}

function BaseCell66() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text41 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001216</p>
      </div>
    </div>
  );
}

function BaseCell67() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text42 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001215</p>
      </div>
    </div>
  );
}

function BaseCell68() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text43 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001214</p>
      </div>
    </div>
  );
}

function BaseCell69() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text44 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-856-20260217-001213</p>
      </div>
    </div>
  );
}

function BaseCell70() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text45 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-856-20260217-001212</p>
      </div>
    </div>
  );
}

function BaseCell71() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text46 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001211</p>
      </div>
    </div>
  );
}

function BaseCell72() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text47 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001210</p>
      </div>
    </div>
  );
}

function BaseCell73() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text48 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative rounded-[2px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">EDI-810-20260217-001209</p>
      </div>
    </div>
  );
}

function BaseCell74() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text49 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomColumn() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[217px]" data-name="Custom column">
      <div className="relative shrink-0 w-full" data-name="Pinned view Column header">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
          <TableCellHeader2 />
          <div className="bg-[#a5a6a8] h-px relative shrink-0 w-full" data-name="Border" />
        </div>
      </div>
      <BaseCell50 />
      <BaseCell51 />
      <BaseCell52 />
      <BaseCell53 />
      <BaseCell54 />
      <BaseCell55 />
      <BaseCell56 />
      <BaseCell57 />
      <BaseCell58 />
      <BaseCell59 />
      <BaseCell60 />
      <BaseCell61 />
      <BaseCell62 />
      <BaseCell63 />
      <BaseCell64 />
      <BaseCell65 />
      <BaseCell66 />
      <BaseCell67 />
      <BaseCell68 />
      <BaseCell69 />
      <BaseCell70 />
      <BaseCell71 />
      <BaseCell72 />
      <BaseCell73 />
      <BaseCell74 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="content">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#47484a] text-[12px] text-ellipsis whitespace-nowrap">Severity</p>
    </div>
  );
}

function TableCellHeader3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="table-cell/header">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Critical</p>
    </div>
  );
}

function BaseCell75() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text50 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Critical</p>
    </div>
  );
}

function BaseCell76() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text51 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Critical</p>
    </div>
  );
}

function BaseCell77() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text52 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Critical</p>
    </div>
  );
}

function BaseCell78() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text53 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Low</p>
    </div>
  );
}

function BaseCell79() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="None" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text54 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text55() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Critical</p>
    </div>
  );
}

function BaseCell80() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text55 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text56() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Critical</p>
    </div>
  );
}

function BaseCell81() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text56 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Medium</p>
    </div>
  );
}

function BaseCell82() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="Minor" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text57 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">High</p>
    </div>
  );
}

function BaseCell83() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="Major" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text58 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text59() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Low</p>
    </div>
  );
}

function BaseCell84() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="None" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text59 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text60() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Low</p>
    </div>
  );
}

function BaseCell85() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="None" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text60 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Medium</p>
    </div>
  );
}

function BaseCell86() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="Minor" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text61 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text62() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Medium</p>
    </div>
  );
}

function BaseCell87() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="Minor" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text62 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Medium</p>
    </div>
  );
}

function BaseCell88() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="Minor" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text63 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text64() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Critical</p>
    </div>
  );
}

function BaseCell89() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text64 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">High</p>
    </div>
  );
}

function BaseCell90() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="Major" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text65 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text66() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">High</p>
    </div>
  );
}

function BaseCell91() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="Major" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text66 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Medium</p>
    </div>
  );
}

function BaseCell92() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="Minor" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text67 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Critical</p>
    </div>
  );
}

function BaseCell93() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text68 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text69() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Critical</p>
    </div>
  );
}

function BaseCell94() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text69 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text70() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">High</p>
    </div>
  );
}

function BaseCell95() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="Major" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text70 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text71() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">High</p>
    </div>
  );
}

function BaseCell96() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="Major" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text71 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text72() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">High</p>
    </div>
  );
}

function BaseCell97() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="Major" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text72 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text73() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Medium</p>
    </div>
  );
}

function BaseCell98() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" severity="Minor" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text73 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text74() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative rounded-[2px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Critical</p>
    </div>
  );
}

function BaseCell99() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <SeveritySystemStatus className="relative shrink-0 size-[16px]" />
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name=".content-with-actions">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center py-[3px] relative size-full">
                <Text74 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomColumn1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[172px]" data-name="Custom column">
      <div className="relative shrink-0 w-full" data-name="Pinned view Column header">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
          <TableCellHeader3 />
          <div className="bg-[#a5a6a8] h-px relative shrink-0 w-full" data-name="Border" />
        </div>
      </div>
      <BaseCell75 />
      <BaseCell76 />
      <BaseCell77 />
      <BaseCell78 />
      <BaseCell79 />
      <BaseCell80 />
      <BaseCell81 />
      <BaseCell82 />
      <BaseCell83 />
      <BaseCell84 />
      <BaseCell85 />
      <BaseCell86 />
      <BaseCell87 />
      <BaseCell88 />
      <BaseCell89 />
      <BaseCell90 />
      <BaseCell91 />
      <BaseCell92 />
      <BaseCell93 />
      <BaseCell94 />
      <BaseCell95 />
      <BaseCell96 />
      <BaseCell97 />
      <BaseCell98 />
      <BaseCell99 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="content">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#47484a] text-[12px] text-ellipsis whitespace-nowrap">Document type</p>
    </div>
  );
}

function TableCellHeader4() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="table-cell/header">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Text75() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 850 (Purchase Order)</p>
      </div>
    </div>
  );
}

function BaseCell100() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text75 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text76() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 850 (Purchase Order)</p>
      </div>
    </div>
  );
}

function BaseCell101() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text76 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text77() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 850 (Purchase Order)</p>
      </div>
    </div>
  );
}

function BaseCell102() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text77 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text78() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 850 (Purchase Order)</p>
      </div>
    </div>
  );
}

function BaseCell103() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text78 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text79() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 856 (ASN)</p>
      </div>
    </div>
  );
}

function BaseCell104() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text79 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text80() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 810 (Invoice)</p>
      </div>
    </div>
  );
}

function BaseCell105() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text80 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text81() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 810 (Invoice)</p>
      </div>
    </div>
  );
}

function BaseCell106() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text81 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text82() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 855 (PO Acknowledgement)</p>
      </div>
    </div>
  );
}

function BaseCell107() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text82 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text83() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 856 (ASN)</p>
      </div>
    </div>
  );
}

function BaseCell108() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text83 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text84() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 856 (ASN)</p>
      </div>
    </div>
  );
}

function BaseCell109() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text84 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text85() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 856 (ASN)</p>
      </div>
    </div>
  );
}

function BaseCell110() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text85 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text86() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 855 (PO Acknowledgement)</p>
      </div>
    </div>
  );
}

function BaseCell111() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text86 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text87() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 855 (PO Acknowledgement)</p>
      </div>
    </div>
  );
}

function BaseCell112() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text87 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text88() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 855 (PO Acknowledgement)</p>
      </div>
    </div>
  );
}

function BaseCell113() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text88 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text89() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 810 (Invoice)</p>
      </div>
    </div>
  );
}

function BaseCell114() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text89 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text90() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 856 (ASN)</p>
      </div>
    </div>
  );
}

function BaseCell115() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text90 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text91() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 856 (ASN)</p>
      </div>
    </div>
  );
}

function BaseCell116() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text91 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text92() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 855 (PO Acknowledgement)</p>
      </div>
    </div>
  );
}

function BaseCell117() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text92 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text93() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 810 (Invoice)</p>
      </div>
    </div>
  );
}

function BaseCell118() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text93 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text94() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 810 (Invoice)</p>
      </div>
    </div>
  );
}

function BaseCell119() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text94 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text95() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 856 (ASN)</p>
      </div>
    </div>
  );
}

function BaseCell120() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text95 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text96() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">EDI 856 (ASN)</p>
      </div>
    </div>
  );
}

function BaseCell121() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text96 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text97() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">e-Report - Electronic Report</p>
      </div>
    </div>
  );
}

function BaseCell122() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text97 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text98() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Invoice - Billing Document</p>
      </div>
    </div>
  );
}

function BaseCell123() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text98 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text99() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Invoice - Billing Document</p>
      </div>
    </div>
  );
}

function BaseCell124() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text99 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-w-px not-italic overflow-hidden relative text-[#47484a] text-[12px] text-ellipsis whitespace-nowrap">Rule failed</p>
    </div>
  );
}

function TableCellHeader5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="table-cell/header">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Text100() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">PO UPC Missing</p>
      </div>
    </div>
  );
}

function BaseCell125() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text100 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text101() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">PO UPC Missing</p>
      </div>
    </div>
  );
}

function BaseCell126() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text101 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text102() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">PO UPC Missing</p>
      </div>
    </div>
  );
}

function BaseCell127() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text102 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text103() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">PO UPC Missing</p>
      </div>
    </div>
  );
}

function BaseCell128() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text103 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text104() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`ASN-PO: ASN Missing `}</p>
      </div>
    </div>
  );
}

function BaseCell129() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text104 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text105() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">PO UPC Missing</p>
      </div>
    </div>
  );
}

function BaseCell130() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text105 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text106() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">PO UPC Missing</p>
      </div>
    </div>
  );
}

function BaseCell131() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text106 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text107() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`INV-ASN: INV Quantity Mismatch `}</p>
      </div>
    </div>
  );
}

function BaseCell132() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text107 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text108() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`ASN-PO: ASN Missing `}</p>
      </div>
    </div>
  );
}

function BaseCell133() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text108 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text109() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`ASN-PO: ASN Missing `}</p>
      </div>
    </div>
  );
}

function BaseCell134() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text109 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text110() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`ASN-PO: ASN Missing `}</p>
      </div>
    </div>
  );
}

function BaseCell135() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text110 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text111() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`INV-ASN: INV Quantity Mismatch `}</p>
      </div>
    </div>
  );
}

function BaseCell136() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text111 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text112() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`INV-ASN: INV Quantity Mismatch `}</p>
      </div>
    </div>
  );
}

function BaseCell137() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text112 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text113() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`INV-ASN: INV Quantity Mismatch `}</p>
      </div>
    </div>
  );
}

function BaseCell138() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text113 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text114() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">PO UPC Missing</p>
      </div>
    </div>
  );
}

function BaseCell139() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text114 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text115() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`ASN-PO: ASN Missing `}</p>
      </div>
    </div>
  );
}

function BaseCell140() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text115 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text116() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`ASN-PO: ASN Missing `}</p>
      </div>
    </div>
  );
}

function BaseCell141() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text116 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text117() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`INV-ASN: INV Quantity Mismatch `}</p>
      </div>
    </div>
  );
}

function BaseCell142() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text117 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text118() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`INV-ASN: INV Quantity Mismatch `}</p>
      </div>
    </div>
  );
}

function BaseCell143() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text118 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text119() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`INV-ASN: INV Quantity Mismatch `}</p>
      </div>
    </div>
  );
}

function BaseCell144() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text119 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text120() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-pre">{`ASN-PO: ASN Missing `}</p>
      </div>
    </div>
  );
}

function BaseCell145() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text120 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text121() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Partner name</p>
      </div>
    </div>
  );
}

function BaseCell146() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text121 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text122() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Partner name</p>
      </div>
    </div>
  );
}

function BaseCell147() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text122 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text123() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Partner name</p>
      </div>
    </div>
  );
}

function BaseCell148() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text123 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text124() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Partner name</p>
      </div>
    </div>
  );
}

function BaseCell149() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text124 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-w-px not-italic overflow-hidden relative text-[#47484a] text-[12px] text-ellipsis whitespace-nowrap">Error field</p>
    </div>
  );
}

function TableCellHeader6() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="table-cell/header">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Text125() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Purchase Order Number</p>
      </div>
    </div>
  );
}

function BaseCell150() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text125 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text126() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Purchase Order Number</p>
      </div>
    </div>
  );
}

function BaseCell151() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text126 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text127() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Purchase Order Number</p>
      </div>
    </div>
  );
}

function BaseCell152() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text127 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text128() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Purchase Order Number</p>
      </div>
    </div>
  );
}

function BaseCell153() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text128 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text129() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Product/Service ID (UPC)</p>
      </div>
    </div>
  );
}

function BaseCell154() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text129 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text130() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Quantity Invoiced</p>
      </div>
    </div>
  );
}

function BaseCell155() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text130 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text131() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Quantity Invoiced</p>
      </div>
    </div>
  );
}

function BaseCell156() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text131 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text132() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Product/Service ID (UPC)</p>
      </div>
    </div>
  );
}

function BaseCell157() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text132 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text133() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Product/Service ID (UPC)</p>
      </div>
    </div>
  );
}

function BaseCell158() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text133 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text134() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Product/Service ID (UPC)</p>
      </div>
    </div>
  );
}

function BaseCell159() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text134 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text135() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Product/Service ID (UPC)</p>
      </div>
    </div>
  );
}

function BaseCell160() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text135 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text136() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Product/Service ID (UPC)</p>
      </div>
    </div>
  );
}

function BaseCell161() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text136 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text137() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Product/Service ID (UPC)</p>
      </div>
    </div>
  );
}

function BaseCell162() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text137 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text138() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Product/Service ID (UPC)</p>
      </div>
    </div>
  );
}

function BaseCell163() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text138 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text139() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Quantity Invoiced</p>
      </div>
    </div>
  );
}

function BaseCell164() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text139 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text140() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Product/Service ID (UPC)</p>
      </div>
    </div>
  );
}

function BaseCell165() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text140 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text141() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Product/Service ID (UPC)</p>
      </div>
    </div>
  );
}

function BaseCell166() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text141 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text142() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Product/Service ID (UPC)</p>
      </div>
    </div>
  );
}

function BaseCell167() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text142 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text143() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Quantity Invoiced</p>
      </div>
    </div>
  );
}

function BaseCell168() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text143 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text144() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Quantity Invoiced</p>
      </div>
    </div>
  );
}

function BaseCell169() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text144 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text145() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Product/Service ID (UPC)</p>
      </div>
    </div>
  );
}

function BaseCell170() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text145 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text146() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Partner name</p>
      </div>
    </div>
  );
}

function BaseCell171() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text146 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text147() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Partner name</p>
      </div>
    </div>
  );
}

function BaseCell172() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text147 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text148() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Partner name</p>
      </div>
    </div>
  );
}

function BaseCell173() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text148 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text149() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis whitespace-nowrap">Partner name</p>
      </div>
    </div>
  );
}

function BaseCell174() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".text-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text149 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-end min-w-px relative" data-name="content">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#47484a] text-[12px] text-ellipsis whitespace-nowrap">Date</p>
    </div>
  );
}

function TableCellHeader7() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="table-cell/header">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-end px-[8px] relative size-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Text150() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:15</p>
      </div>
    </div>
  );
}

function BaseCell175() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text150 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text151() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:16</p>
      </div>
    </div>
  );
}

function BaseCell176() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text151 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text152() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:17</p>
      </div>
    </div>
  );
}

function BaseCell177() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text152 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text153() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:18</p>
      </div>
    </div>
  );
}

function BaseCell178() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text153 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text154() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:19</p>
      </div>
    </div>
  );
}

function BaseCell179() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text154 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text155() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:20</p>
      </div>
    </div>
  );
}

function BaseCell180() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text155 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text156() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:21</p>
      </div>
    </div>
  );
}

function BaseCell181() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text156 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text157() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:22</p>
      </div>
    </div>
  );
}

function BaseCell182() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text157 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text158() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:23</p>
      </div>
    </div>
  );
}

function BaseCell183() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text158 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text159() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:24</p>
      </div>
    </div>
  );
}

function BaseCell184() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text159 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text160() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:25</p>
      </div>
    </div>
  );
}

function BaseCell185() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text160 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text161() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:26</p>
      </div>
    </div>
  );
}

function BaseCell186() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text161 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text162() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:27</p>
      </div>
    </div>
  );
}

function BaseCell187() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text162 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text163() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:28</p>
      </div>
    </div>
  );
}

function BaseCell188() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text163 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text164() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:29</p>
      </div>
    </div>
  );
}

function BaseCell189() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text164 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text165() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:30</p>
      </div>
    </div>
  );
}

function BaseCell190() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text165 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text166() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:31</p>
      </div>
    </div>
  );
}

function BaseCell191() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text166 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text167() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:32</p>
      </div>
    </div>
  );
}

function BaseCell192() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text167 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text168() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:33</p>
      </div>
    </div>
  );
}

function BaseCell193() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text168 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text169() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:34</p>
      </div>
    </div>
  );
}

function BaseCell194() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text169 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text170() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:35</p>
      </div>
    </div>
  );
}

function BaseCell195() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text170 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text171() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:36</p>
      </div>
    </div>
  );
}

function BaseCell196() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text171 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text172() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:37</p>
      </div>
    </div>
  );
}

function BaseCell197() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text172 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text173() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:38</p>
      </div>
    </div>
  );
}

function BaseCell198() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text173 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text174() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative rounded-[2px]" data-name="Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[13px] text-ellipsis text-right whitespace-nowrap">2026-02-17 08:23:39</p>
      </div>
    </div>
  );
}

function BaseCell199() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="base Cell">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center px-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name=".intiger-content">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[3px] relative size-full">
                <Text174 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px overflow-clip relative w-full" data-name="Table Content">
      <div className="relative shrink-0" data-name="column_Checkbox">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="relative shrink-0" data-name=".column_Checkbox">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0" data-name="Column header">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
                  <TableCellHeader />
                  <div className="bg-[#a5a6a8] h-px relative shrink-0 w-full" data-name="Border" />
                </div>
              </div>
              <BaseCell />
              <BaseCell1 />
              <BaseCell2 />
              <BaseCell3 />
              <BaseCell4 />
              <BaseCell5 />
              <BaseCell6 />
              <BaseCell7 />
              <BaseCell8 />
              <BaseCell9 />
              <BaseCell10 />
              <BaseCell11 />
              <BaseCell12 />
              <BaseCell13 />
              <BaseCell14 />
              <BaseCell15 />
              <BaseCell16 />
              <BaseCell17 />
              <BaseCell18 />
              <BaseCell19 />
              <BaseCell20 />
              <BaseCell21 />
              <BaseCell22 />
              <BaseCell23 />
              <BaseCell24 />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[196px]" data-name="Custom column">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="relative shrink-0 w-full" data-name="Custom Pinned column">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Pinned view Column header">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
                  <TableCellHeader1 />
                  <div className="bg-[#a5a6a8] h-px relative shrink-0 w-full" data-name="Border" />
                </div>
              </div>
              <BaseCell25 />
              <BaseCell26 />
              <BaseCell27 />
              <BaseCell28 />
              <BaseCell29 />
              <BaseCell30 />
              <BaseCell31 />
              <BaseCell32 />
              <BaseCell33 />
              <BaseCell34 />
              <BaseCell35 />
              <BaseCell36 />
              <BaseCell37 />
              <BaseCell38 />
              <BaseCell39 />
              <BaseCell40 />
              <BaseCell41 />
              <BaseCell42 />
              <BaseCell43 />
              <BaseCell44 />
              <BaseCell45 />
              <BaseCell46 />
              <BaseCell47 />
              <BaseCell48 />
              <BaseCell49 />
            </div>
          </div>
        </div>
      </div>
      <CustomColumn />
      <CustomColumn1 />
      <div className="relative shrink-0 w-[227px]" data-name="Default Cell">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="relative shrink-0 w-full" data-name="Custom Pinned column">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Pinned view Column header">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
                  <TableCellHeader4 />
                  <div className="bg-[#a5a6a8] h-px relative shrink-0 w-full" data-name="Border" />
                </div>
              </div>
              <BaseCell100 />
              <BaseCell101 />
              <BaseCell102 />
              <BaseCell103 />
              <BaseCell104 />
              <BaseCell105 />
              <BaseCell106 />
              <BaseCell107 />
              <BaseCell108 />
              <BaseCell109 />
              <BaseCell110 />
              <BaseCell111 />
              <BaseCell112 />
              <BaseCell113 />
              <BaseCell114 />
              <BaseCell115 />
              <BaseCell116 />
              <BaseCell117 />
              <BaseCell118 />
              <BaseCell119 />
              <BaseCell120 />
              <BaseCell121 />
              <BaseCell122 />
              <BaseCell123 />
              <BaseCell124 />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[185px]" data-name="Default Cell">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="relative shrink-0 w-full" data-name="Custom Pinned column">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Pinned view Column header">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
                  <TableCellHeader5 />
                  <div className="bg-[#a5a6a8] h-px relative shrink-0 w-full" data-name="Border" />
                </div>
              </div>
              <BaseCell125 />
              <BaseCell126 />
              <BaseCell127 />
              <BaseCell128 />
              <BaseCell129 />
              <BaseCell130 />
              <BaseCell131 />
              <BaseCell132 />
              <BaseCell133 />
              <BaseCell134 />
              <BaseCell135 />
              <BaseCell136 />
              <BaseCell137 />
              <BaseCell138 />
              <BaseCell139 />
              <BaseCell140 />
              <BaseCell141 />
              <BaseCell142 />
              <BaseCell143 />
              <BaseCell144 />
              <BaseCell145 />
              <BaseCell146 />
              <BaseCell147 />
              <BaseCell148 />
              <BaseCell149 />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[185px]" data-name="Default Cell">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="relative shrink-0 w-full" data-name="Custom Pinned column">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Pinned view Column header">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
                  <TableCellHeader6 />
                  <div className="bg-[#a5a6a8] h-px relative shrink-0 w-full" data-name="Border" />
                </div>
              </div>
              <BaseCell150 />
              <BaseCell151 />
              <BaseCell152 />
              <BaseCell153 />
              <BaseCell154 />
              <BaseCell155 />
              <BaseCell156 />
              <BaseCell157 />
              <BaseCell158 />
              <BaseCell159 />
              <BaseCell160 />
              <BaseCell161 />
              <BaseCell162 />
              <BaseCell163 />
              <BaseCell164 />
              <BaseCell165 />
              <BaseCell166 />
              <BaseCell167 />
              <BaseCell168 />
              <BaseCell169 />
              <BaseCell170 />
              <BaseCell171 />
              <BaseCell172 />
              <BaseCell173 />
              <BaseCell174 />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[180px]" data-name="Intigers">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="relative shrink-0 w-full" data-name="Custom Pinned column">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Pinned view Column header">
                <div className="flex flex-col items-end size-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pt-[12px] relative size-full">
                    <TableCellHeader7 />
                    <div className="bg-[#a5a6a8] h-px relative shrink-0 w-full" data-name="Border" />
                  </div>
                </div>
              </div>
              <BaseCell175 />
              <BaseCell176 />
              <BaseCell177 />
              <BaseCell178 />
              <BaseCell179 />
              <BaseCell180 />
              <BaseCell181 />
              <BaseCell182 />
              <BaseCell183 />
              <BaseCell184 />
              <BaseCell185 />
              <BaseCell186 />
              <BaseCell187 />
              <BaseCell188 />
              <BaseCell189 />
              <BaseCell190 />
              <BaseCell191 />
              <BaseCell192 />
              <BaseCell193 />
              <BaseCell194 />
              <BaseCell195 />
              <BaseCell196 />
              <BaseCell197 />
              <BaseCell198 />
              <BaseCell199 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[6px] h-[24px] items-center justify-center px-[8px] relative rounded-[4px] shrink-0" data-name="container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#313233] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">25 per page</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_chevron-small-down">
        <div className="absolute bottom-[33.08%] left-1/4 right-1/4 top-[37.5%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.70711" preserveAspectRatio="none" viewBox="0 0 8 4.70711" width="8">
            <path clipRule="evenodd" d={svgPaths.peb93d80} fill="#313233" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Left Side">
      <div className="relative shrink-0" data-name="Subtle button">
        <div className="content-stretch flex items-start relative size-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function LeftControls() {
  return <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[48px]" data-name="left controls" />;
}

function Container32() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative rounded-[4px]" data-name="container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#313233] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16px]">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative rounded-[4px]" data-name="container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#313233] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16px]">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative rounded-[4px]" data-name="container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#313233] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16px]">4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative rounded-[4px]" data-name="container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#313233] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16px]">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_chevron-small-right">
        <div className="absolute bottom-1/4 left-[37.5%] right-[33.08%] top-1/4" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 4.70711 8" width="4.70711">
            <path clipRule="evenodd" d={svgPaths.p3229fd00} fill="#313233" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="container">
      <div className="relative shrink-0 size-[16px]" data-name="icon_chevron-last">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="relative size-[8px]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 7.99996 8" width="7.99996">
                    <path d={svgPaths.p23d0ab80} fill="#313233" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightControls() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[48px]" data-name="right controls">
      <div className="relative shrink-0" data-name="Page set after">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Container36 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Last page">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Container37 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PageControl() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Page# + Control">
      <LeftControls />
      <PaginationNumber className="relative shrink-0" type="Selected" />
      <div className="relative shrink-0" data-name=".pagination-number">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0 w-[32px]" data-name="Subtle button">
            <div className="content-stretch flex items-start relative size-full">
              <Container32 />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name=".pagination-number">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0 w-[32px]" data-name="Subtle button">
            <div className="content-stretch flex items-start relative size-full">
              <Container33 />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name=".pagination-number">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0 w-[32px]" data-name="Subtle button">
            <div className="content-stretch flex items-start relative size-full">
              <Container34 />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name=".pagination-number">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0 w-[32px]" data-name="Subtle button">
            <div className="content-stretch flex items-start relative size-full">
              <Container35 />
            </div>
          </div>
        </div>
      </div>
      <RightControls />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Pagination">
      <PageControl />
    </div>
  );
}

function OtPinnedDataTable() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[12px] w-full" data-name="OT Pinned Data table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <StandardTableHeaderBulkSelection />
        <TableContent />
        <div className="h-[33px] relative shrink-0 w-full" data-name="Pagination bar">
          <div aria-hidden className="absolute border-[rgba(0,0,0,0.15)] border-solid border-t inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-between pl-[6px] pr-[12px] py-[6px] relative size-full">
              <LeftSide />
              <Pagination />
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#707175] text-[11px] text-right w-[107px]">3256 items</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrespectiveWrapper() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Prespective wrapper">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
          <Frame2 />
          <OtPinnedDataTable />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative w-full">
      <PrespectiveWrapper />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f5f6f7] content-stretch flex flex-col items-start pt-px relative size-full" data-name="Home">
      <div className="relative shrink-0" data-name="Global header: Chargeback">
        <div className="content-stretch flex items-start relative size-full">
          <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] h-[56px] min-w-[1024px] relative shrink-0 w-[1440px]" data-name="Global header">
            <div aria-hidden className="absolute border-[#2f6df6] border-b-2 border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
              <div className="content-stretch flex items-center justify-between min-w-[inherit] pl-[12px] pr-[16px] relative size-full">
                <LeftArea />
                <RightArea />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}
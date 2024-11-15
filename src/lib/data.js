const data = [
    {
        category: "Account Policies",
        tests: [
            "Enforce password history",
            "Maximum password age",
            "Minimum password age",
            "Minimum password length",
            "Password must meet complexity requirements",
            "Relax minimum password length limits",
            "Store passwords using reversible encryption",
            "Account lockout duration",
            "Account lockout threshold",
            "Allow Administrator account lockout",
            "Reset account lockout counter after",
        ],
    },
    {
        category: "Local Policies",
        tests: [
            "Access Credential Manager as a trusted caller",
            "Access this computer from the network",
            "Act as part of the operating system",
            "Adjust memory quotas for a process",
            "Allow log on locally",
            "Allow log on through Remote Desktop Services",
            "Back up files and directories",
            "Change the system time",
            "Change the time zone",
            "Create a pagefile",
            "Create a token object",
            "Create global objects",
            "Create permanent shared objects",
            "Create symbolic links",
            "Debug programs",
            "Deny access to this computer from the network",
            "Deny log on as a batch job",
            "Deny log on as a service",
            "Deny log on locally",
            "Deny log on through Remote Desktop Services",
            "Enable computer and user accounts to be trusted for delegation",
            "Force shutdown from a remote system",
            "Generate security audits",
            "Impersonate a client after authentication",
            "Increase scheduling priority",
            "Load and unload device drivers",
            "Lock pages in memory",
            "Log on as a batch job",
            "Log on as a service",
            "Manage auditing and security log",
            "Modify an object label",
            "Modify firmware environment values",
            "Perform volume maintenance tasks",
            "Profile single process",
            "Profile system performance",
            "Replace a process level token",
            "Restore files and directories",
            "Shut down the system",
            "Take ownership of files or other objects",
            "Accounts: Block Microsoft accounts",
            "Accounts: Guest account status",
            "Accounts: Limit local account use of blank passwords to console logon only",
            "Accounts: Rename administrator account",
            "Accounts: Rename guest account",
            "Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings",
            "Audit: Shut down system immediately if unable to log security audits",
            "Devices: Prevent users from installing printer drivers",
            "Interactive logon: Do not require CTRL+ALT+DEL",
            "Interactive logon: Don't display last signed in",
            "Interactive logon: Machine account lockout threshold",
            "Interactive logon: Machine inactivity limit",
            "Interactive logon: Message text for users attempting to log on",
            "Interactive logon: Message title for users attempting to log on",
            "Interactive logon: Prompt user to change password before expiration",
            "Interactive logon: Smart card removal behavior",
            "Microsoft network client: Digitally sign communications (always)",
            "Microsoft network client: Digitally sign communications (if server agrees)",
            "Microsoft network client: Send unencrypted password to third-party SMB servers",
            "Microsoft network server: Amount of idle time required before suspending session",
            "Microsoft network server: Digitally sign communications (always)",
            "Microsoft network server: Digitally sign communications (if client agrees)",
            "Microsoft network server: Disconnect clients when logon hours expire",
            "Microsoft network server: Server SPN target name validation level",
            "Network access: Allow anonymous SID/Name translation",
            "Network access: Do not allow anonymous enumeration of SAM accounts",
            "Network access: Do not allow anonymous enumeration of SAM accounts and shares",
            "Network access: Do not allow storage of passwords and credentials for network authentication",
            "Network access: Let Everyone permissions apply to anonymous users",
            "Network access: Named Pipes that can be accessed anonymously",
            "Network access: Remotely accessible registry paths",
            "Network access: Remotely accessible registry paths and sub-paths",
            "Network access: Restrict anonymous access to Named Pipes and Shares",
            "Network access: Restrict clients allowed to make remote calls to SAM",
            "Network access: Shares that can be accessed anonymously",
            "Network access: Sharing and security model for local accounts",
            "Network security: Allow Local System to use computer identity for NTLM",
            "Network security: Allow LocalSystem NULL session fallback",
            "Network Security: Allow PKU2U authentication requests to this computer to use online identities",
            "Network security: Configure encryption types allowed for Kerberos AES256_HMAC_SHA1",
            "Future encryption types",
            "Network security: Do not store LAN Manager hash value on next password change",
            "Network security: Force logoff when logon hours expire",
            "Network security: LAN Manager authentication level",
            "Network security: LDAP client signing requirements",
            "Network security: Minimum session security for NTLM SSP based (including secure RPC) clients Require 128-bit encryption",
            "Network security: Minimum session security for NTLM SSP based (including secure RPC) servers Require 128-bit encryption",
            "Network security: Restrict NTLM: Audit Incoming NTLM Traffic",
            "Network security: Restrict NTLM: Outgoing NTLM traffic to remote servers",
            "System cryptography: Force strong key protection for user keys stored on the computer",
            "System objects: Require case insensitivity for non-Windows subsystems",
            "System objects: Strengthen default permissions of internal system objects (e.g. Symbolic Links)",
            "User Account Control: Admin Approval Mode for the Built-in Administrator account",
            "User Account Control: Behavior of the elevation prompt for administrators in Admin Approval Mode",
            "User Account Control: Behavior of the elevation prompt for standard users",
            "User Account Control: Detect application installations and prompt for elevation",
            "User Account Control: Only elevate UIAccess applications that are installed in secure locations",
            "User Account Control: Run all administrators in Admin Approval Mode",
            "User Account Control: Switch to the secure desktop when prompting for elevation",
            "User Account Control: Virtualize file and registry write failures to per-user locations",
        ],
    },
    {
        category: "System Services",
        tests: [
            "Bluetooth Audio Gateway Service (BTAGService)",
            "Bluetooth Support Service (bthserv)",
            "Computer Browser (Browser)",
            "Downloaded Maps Manager (MapsBroker)",
            "Geolocation Service (lfsvc)",
            "IIS Admin Service (IISADMIN)",
            "Infrared monitor service (irmon)",
            "Link-Layer Topology Discovery Mapper (lltdsvc)",
            "LxssManager (LxssManager)",
            "Microsoft FTP Service (FTPSVC)",
            "Microsoft iSCSI Initiator Service (MSiSCSI)",
            "OpenSSH SSH Server (sshd)",
            "Peer Name Resolution Protocol (PNRPsvc)",
            "Peer Networking Grouping (p2psvc)",
            "Peer Networking Identity Manager (p2pimsvc)",
            "PNRP Machine Name Publication Service (PNRPAutoReg)",
            "Print Spooler (Spooler)",
            "Problem Reports and Solutions Control Panel Support (wercplsupport)",
            "Remote Access Auto Connection Manager (RasAuto)",
            "Remote Desktop Configuration (SessionEnv)",
            "Remote Desktop Services (TermService)",
            "Remote Desktop Services UserMode Port Redirector (UmRdpService)",
            "Remote Procedure Call (RPC) Locator (RpcLocator)",
            "Remote Registry (RemoteRegistry)",
            "Routing and Remote Access (RemoteAccess)",
            "Server (LanmanServer)",
            "Simple TCP/IP Services (simptcp)",
            "SNMP Service (SNMP)",
            "Special Administration Console Helper (sacsvr)",
            "SSDP Discovery (SSDPSRV)",
            "UPnP Device Host (upnphost)",
            "Web Management Service (WMSvc)",
            "Windows Error Reporting Service (WerSvc)",
            "Windows Event Collector (Wecsvc)",
            "Windows Media Player Network Sharing Service (WMPNetworkSvc)",
            "Windows Mobile Hotspot Service (icssvc)",
            "Windows Push Notifications System Service (WpnService)",
            "Windows PushToInstall Service (PushToInstall)",
            "Windows Remote Management (WSManagement) (WinRM)",
            "World Wide Web Publishing Service (W3SVC)",
            "Xbox Accessory Management Service (XboxGipSvc)",
            "Xbox Live Auth Manager (XblAuthManager)",
            "Xbox Live Game Save (XblGameSave)",
            "Xbox Live Networking Service (XboxNetApiSvc)",
        ],
    },
    {
        category: "Windows Defender Firewall",
        tests: [
            "Windows Firewall: Private: Firewall state",
            "Windows Firewall: Private: Inbound connections",
            "Windows Firewall: Private: Settings: Display a notification",
            "Windows Firewall: Private: Logging: Name",
            "Windows Firewall: Private: Logging: Size limit (KB)",
            "Windows Firewall: Private: Logging: Log dropped packets",
            "Windows Firewall: Private: Logging: Log successful connections",
            "Windows Firewall: Public: Firewall state",
            "Windows Firewall: Public: Inbound connections",
            "Windows Firewall: Public: Settings: Display a notification",
            "Windows Firewall: Public: Settings: Apply local firewall rules",
            "Windows Firewall: Public: Settings: Apply local connection security rules",
            "Windows Firewall: Public: Logging: Name",
            "Windows Firewall: Public: Logging: Size limit (KB)",
            "Windows Firewall: Public: Logging: Log dropped packets",
            "Windows Firewall: Public: Logging: Log successful connections",
        ],
    },
    {
        category: "Advanced Audit Configurations",
        tests: [
            "Audit Credential Validation",
            "Audit Application Group Management",
            "Audit Security Group Management",
            "Audit User Account Management",
            "Audit PNP Activity",
            "Audit Process Creation",
            "Audit Account Lockout",
            "Audit Group Membership",
            "Audit Logoff",
            "Audit Logon",
            "Audit Other Logon/Logoff Events",
            "Audit Special Logon",
            "Audit Detailed File Share",
            "Audit File Share",
            "Audit Other Object Access Events",
            "Audit Removable Storage",
            "Audit Audit Policy Change",
            "Audit Authentication Policy Change",
            "Audit Authorization Policy Change",
            "Audit MPSSVC Rule-Level Policy Change",
            "Audit Other Policy Change Events",
            "Audit Sensitive Privilege Use",
            "Audit IPsec Driver",
            "Audit Other System Events",
            "Audit Security State Change",
            "Audit Security System Extension",
            "Audit System Integrity",
        ],
    },
    {
        category: "Administrative Templates (Computer)",
        tests: [
            "Prevent enabling lock screen camera",
            "Prevent enabling lock screen slide show",
            "Allow users to enable online speech recognition services",
            "Allow Online Tips",
            "Configure RPC packet level privacy setting for incoming connections",
            "Configure SMB v1 client driver",
            "Configure SMB v1 server",
            "Enable Certificate Padding",
            "Enable Structured Exception Handling Overwrite Protection (SEHOP)",
            "NetBT NodeType configuration",
            "WDigest Authentication",
            "MSS: (AutoAdminLogon) Enable Automatic Logon",
            "MSS: (DisableIPSourceRouting IPv6) IP source routing protection level",
            "MSS: (DisableIPSourceRouting) IP source routing protection level",
            "MSS: (DisableSavePassword) Prevent the dial-up password from being saved",
            "MSS: (EnableICMPRedirect) Allow ICMP redirects to override OSPF generated routes",
            "MSS: (KeepAliveTime) How often keepalive packets are sent in milliseconds",
            "MSS: (NoNameReleaseOnDemand) Allow the computer to ignore NetBIOS name release requests except from WINS servers",
            "Enable Structured Exception Handling Overwrite Protection (SEHOP)",
            "NetBT NodeType configuration",
            "WDigest Authentication",
            "MSS: (AutoAdminLogon) Enable Automatic Logon",
            "MSS: (DisableIPSourceRouting IPv6) IP source routing protection level",
            "MSS: (DisableIPSourceRouting) IP source routing protection level",
            "MSS: (DisableSavePassword) Prevent the dial-up password from being saved",
            "MSS: (EnableICMPRedirect) Allow ICMP redirects to override OSPF generated routes",
            "MSS: (KeepAliveTime) How often keepalive packets are sent in milliseconds",
            "MSS: (NoNameReleaseOnDemand) Allow the computer to ignore NetBIOS name release requests except from WINS servers",
            "MSS: (PerformRouterDiscovery) Allow IRDP to detect and configure Default Gateway addresses",
            "MSS: (SafeDllSearchMode) Enable Safe DLL search mode",
            "MSS: (ScreenSaverGracePeriod) The time in seconds before the screen saver grace period expires",
            "MSS: (TcpMaxDataRetransmissions IPv6) How many times unacknowledged data is retransmitted",
            "MSS: (TcpMaxDataRetransmissions) How many times unacknowledged data is retransmitted",
            "MSS: (WarningLevel) Percentage threshold for the security event log at which the system will generate a warning",
            "Configure DNS over HTTPS (DoH) name resolution",
            "Enable Font Providers",
            "Enable insecure guest logons",
            "Turn on Mapper I/O (LLTDIO) driver",
            "Turn on Responder (RSPNDR) driver",
            "Turn off Microsoft Peer-to-Peer Networking Services",
            "Prohibit installation and configuration of Network Bridge on your DNS domain network",
            "Prohibit use of Internet Connection Sharing on your DNS domain network",
            "Hardened UNC Paths",
            "Disable IPv6",
            "Configuration of wireless settings using Windows Connect Now",
            "Prohibit access of the Windows Connect Now wizards",
            "Minimize the number of simultaneous connections to the Internet or a Windows Domain",
            "Allow Windows to automatically connect to suggested open hotspotsAutoConnect",
            "Allow Print Spooler to accept client connections",
            "Configure Redirection Guard",
            "Configure RPC connection settings: Protocol to use for outgoing RPC connections",
            "Configure RPC connection settings: Use authentication for outgoing RPC connections",
            "Configure RPC listener settings: Protocols to allow for incoming RPC connections",
            "Configure RPC listener settings: Authentication protocol to use for incoming RPC connections",
            "Configure RPC over TCP port",
            "Limits print driver installation to Administrators",
            "Manage processing of Queue-specific files",
            "Point and Print Restrictions: When installing drivers for a new connection",
            "Point and Print Restrictions: When updating drivers for an existing connection",
            "Turn off notifications network usage",
            "",
            "Remove Personalized Website Recommendations from the Recommended section in the Start Menu",
            "Include command line in process creation events",
            "Encryption Oracle Remediation",
            "Remote host allows delegation of non exportable credentials",
            "Turn On Virtualization Based Security",
            "Turn On Virtualization Based Security: Select Platform Security Level",
            "Turn On Virtualization Based Security: Virtualization Based Protection of Code Integrity",
            "Turn On Virtualization Based Security: Require UEFI Memory Attributes Table",
            "Turn On Virtualization Based Security: Credential Guard Configuration",
            "Turn On Virtualization Based Security: Secure Launch Configuration",
            "Turn On Virtualization Based Security: Kernel-mode Hardware-enforced Stack Protection",
            "Prevent installation of devices that match any of these device IDs",
            "Prevent installation of devices that match any of these device IDs: Prevent installation of devices that match any of these device IDs",
            "Prevent installation of devices that match any of these device IDs: Also apply to matching devices that are already installed",
            "Prevent installation of devices using drivers that match these device setup classes",
            "Prevent installation of devices using drivers that match these device setup classes: Prevent installation of devices using drivers for these device setup",
            "Prevent installation of devices using drivers that match these device setup classes: Also apply to matching devices that are already installed",
            "Prevent device metadata retrieval from the Internet",
            "Boot-Start Driver Initialization Policy",
            "Continue experiences on this device",
            "Turn off access to the Store",
            "Turn off downloading of print drivers over HTTP",
            "Turn off handwriting personalization data sharing",
            "Turn off handwriting recognition error reporting",
            "Turn off Internet Connection Wizard if URL connection is referring to Microsoft.com",
            "Turn off Internet download for Web publishing and online ordering wizards",
            "Turn off printing over HTTP",
            "Turn off Registration if URL connection is referring to Microsoft.com",
            "Turn off Search Companion content file updates",
            "Turn off the 'Order Prints' picture task",
            "Turn off the 'Publish to Web' task for files and folders",
            "Turn off the Windows Messenger Customer Experience Improvement Program",
            "Turn off Windows Customer Experience Improvement Program",
            "Turn off Windows Error Reporting",
            "Support device authentication using certificate",
            "Enumeration policy for external devices incompatible with Kernel DMA Protection",
            "Allow Custom SSPs and APs to be loaded into LSASS",
            "Configures LSASS to run as a protected process",
            "Disallow copying of user input methods to the system account for sign-in",
            "Block user from showing account details on sign-in",
            "Do not display network selection UI",
            "Turn off app notifications on the lock screen",
            "Turn on convenience PIN sign-in",
            "Allow Clipboard synchronization across devices",
            "Allow upload of User Activities",
            "Allow network connectivity during connected-standby (on battery)",
            "Allow network connectivity during connected-standby (plugged in)",
            "Allow standby states (S1-S3) when sleeping (on battery)",
            "Allow standby states (S1-S3) when sleeping (plugged in)",
            "Require a password when a computer wakes (on battery)",
            "Require a password when a computer wakes (plugged in)",
            "Configure Offer Remote Assistance",
            "Configure Solicited Remote Assistance",
            "Enable RPC Endpoint Mapper Client Authentication",
            "Restrict Unauthenticated RPC clients",
            "Microsoft Support Diagnostic Tool: Turn on MSDT interactive communication with support provider",
            "Enable/Disable PerfTrack",
            "Turn off the advertising ID",
            "Enable Windows NTP Client",
            "Allow a Windows app to share application data between users",
            "Prevent non-admin users from installing packaged Windows apps",
            "Let Windows apps activate with voice while the system is locked",
            "Allow Microsoft accounts to be optional",
            "Block launching Universal Windows apps with Windows Runtime API access from hosted content",
            "Disallow Autoplay for non-volume devices",
            "Set the default behavior for AutoRun",
            "Turn off Autoplay",
            "Configure enhanced anti-spoofing",
            "Allow access to BitLocker-protected fixed data drives from earlier versions of Windows",
            "Choose how BitLocker-protected fixed drives can be recovered",
            "Choose how BitLocker-protected fixed drives can be recovered: Allow data recovery agent",
            "Choose how BitLocker-protected fixed drives can be recovered: Recovery Password",
            "Choose how BitLocker-protected fixed drives can be recovered: Recovery Key",
            "Choose how BitLocker-protected fixed drives can be recovered: Omit recovery options from the BitLocker setup wizard",
            "Choose how BitLocker-protected fixed drives can be recovered: Save BitLocker recovery information to AD DS for fixed data drives",
            "Choose how BitLocker-protected fixed drives can be recovered: Configure storage of BitLocker recovery information to AD DS",
            "Choose how BitLocker-protected fixed drives can be recovered: Do not enable BitLocker until recovery information is stored to AD DS for fixed data drives",
            "Configure use of hardware-based encryption for fixed data drives",
            "Configure use of passwords for fixed data drives",
            "Configure use of smart cards on fixed data drives",
            "Configure use of smart cards on fixed data drives: Require use of smart cards on fixed data drives",
            "Allow enhanced PINs for startup",
            "Allow Secure Boot for integrity validation",
            "Choose how BitLocker-protected operating system drives can be recovered",
            "Choose how BitLocker-protected operating system drives can be recovered: Allow data recovery agent",
            "Choose how BitLocker-protected operating system drives can be recovered: Recovery Password",
            "Choose how BitLocker-protected operating system drives can be recovered: Recovery Key",
            "Choose how BitLocker-protected operating system drives can be recovered: Omit recovery options from the BitLocker setup wizard",
            "Choose how BitLocker-protected operating system drives can be recovered: Save BitLocker recovery information to AD DS for operating system drives",
            "Choose how BitLocker-protected operating system drives can be recovered: Configure storage of BitLocker recovery information to AD DS:",
            "Choose how BitLocker-protected operating system drives can be recovered: Do not enable BitLocker until recovery information is stored to AD DS for operating system drives",
            "Configure use of hardware-based encryption for operating system drives",
            "Configure use of passwords for operating system drives",
            "Require additional authentication at startup",
            "Require additional authentication at startup: Allow BitLocker without a compatible TPM",
            "Require additional authentication at startup: Configure TPM startup:",
            "Require additional authentication at startup: Configure TPM startup PIN:",
            "Require additional authentication at startup: Configure TPM startup key:",
            "Require additional authentication at startup: Configure TPM startup key and PIN:",
            "Allow access to BitLocker-protected removable data drives from earlier versions of Windows",
            "Choose how BitLocker-protected removable drives can be recovered",
            "Choose how BitLocker-protected removable drives can be recovered: Allow data recovery agent",
            "Choose how BitLocker-protected removable drives can be recovered: Recovery Password",
            "Choose how BitLocker-protected removable drives can be recovered: Recovery Key",
            "Choose how BitLocker-protected removable drives can be recovered: Omit recovery options from the BitLocker setup wizard",
            "Choose how BitLocker-protected removable drives can be recovered: Save BitLocker recovery information to AD DS for removable data drives",
            "Choose how BitLocker-protected removable drives can be recovered: Configure storage of BitLocker recovery information to AD DS:",
            "Choose how BitLocker-protected removable drives can be recovered: Do not enable BitLocker until recovery information is stored to AD DS for removable data drives",
            "Configure use of hardware-based encryption for removable data drives",
            "Configure use of passwords for removable data drives",
            "Configure use of smart cards on removable data drives",
            "Configure use of smart cards on removable data drives: Require use of smart cards on removable data drives",
            "Deny write access to removable drives not protected by BitLocker",
            "Deny write access to removable drives not protected by BitLocker: Do not allow write access to devices configured in another organization",
            "Disable new DMA devices when this computer is locked",
            "Allow Use of Camera",
            "Turn off cloud consumer account state content",
            "Turn off cloud optimized content",
            "Turn off Microsoft consumer experiences",
            "Require pin for pairing",
            "Do not display the password reveal button",
            "Enumerate administrator accounts on elevation",
            "Prevent the use of security questions for local accounts",
            "Allow Diagnostic Data",
            "Allow Use of Camera",
            "Turn off cloud consumer account state content",
            "Turn off cloud optimized content",
            "Turn off Microsoft consumer experiences",
            "Require pin for pairing",
            "Do not display the password reveal button",
            "Enumerate administrator accounts on elevation",
            "Prevent the use of security questions for local accounts",
            "Allow Diagnostic Data",
            "Configure Authenticated Proxy usage for the Connected User Experience and Telemetry service",
            "Disable OneSettings Downloads",
            "Do not show feedback notifications",
            "Enable OneSettings Auditing",
            "Limit Diagnostic Log Collection",
            "Limit Dump Collection",
            "Toggle user control over Insider builds",
            "Download Mode",
            "Enable App Installer",
            "Enable App Installer Experimental Features",
            "Enable App Installer Hash Override",
            "Enable App Installer ms-appinstaller protocol",
            "Control Event Log behavior when the log file reaches its maximum size",
            "Specify the maximum log file size (KB)",
            "Control Event Log behavior when the log file reaches its maximum size",
            "Specify the maximum log file size (KB)",
            "Control Event Log behavior when the log file reaches its maximum size",
            "Specify the maximum log file size (KB)",
            "Control Event Log behavior when the log file reaches its maximum size",
            "Specify the maximum log file size (KB)",
            "Turn off account-based insightsHKCU:SoftwareMicrosoftWindowsCurrentVersionExplorerAdvanced",
            "LaunchFolderWindowsDefault",
            "Turn off Data Execution Prevention for Explorer",
            "Turn off heap termination on corruption",
            "Turn off shell protocol protected mode",
            "Turn off location",
            "Allow Message Service Cloud Sync",
            "Block all consumer Microsoft account user authentication",
            "Configure local setting override for reporting to Microsoft MAPS",
            "Join Microsoft MAPS",
            "Configure Attack Surface Reduction rules",
            "Configure Attack Surface Reduction rules: Set the state for each ASR rule",
            "Prevent users and apps from accessing dangerous websites",
            "Enable file hash computation feature",
            "Scan all downloaded files and attachments",
            "Turn off real-time protection",
            "Turn on behavior monitoring",
            "Turn on script scanning",
            "Configure Watson events",
            "Scan packed executables",
            "Scan removable drives",
            "Turn on e-mail scanning",
            "Configure detection for potentially unwanted applications",
            "Turn off Microsoft Defender AntiVirus",
            "Allow auditing events in Microsoft Defender Application Guard",
            "Allow camera and microphone access in Microsoft Defender Application Guard",
            "Allow data persistence for Microsoft Defender Application Guard",
            "Allow files to download and save to the host operating system from Microsoft Defender Application Guard",
            "Configure Microsoft Defender Application Guard clipboard settings: Clipboard behavior setting",
            "Turn on Microsoft Defender Application Guard in Managed Mode",
            "Enable news and interests on the taskbar",
            "Prevent the usage of OneDrive for file storage",
            "Turn off Push To Install service",
            "Disable Cloud Clipboard integration for server-to-client data transfer",
            "Do not allow passwords to be saved",
            "Allow users to connect remotely by using Remote Desktop Services",
            "Allow UI Automation redirection",
            "Do not allow COM port redirection",
            "Do not allow drive redirection",
            "Do not allow location redirection",
            "Do not allow LPT port redirection",
            "Do not allow supported Plug and Play device redirection",
            "Do not allow WebAuthn redirection",
            "Always prompt for password upon connection",
            "Require secure RPC communication",
            "Require use of specific security layer for remote (RDP) connections",
            "Require user authentication for remote connections by using Network Level Authentication",
            "Set client connection encryption level",
            "Set time limit for active but idle Remote Desktop Services sessions",
            "Set time limit for disconnected sessions",
            "Do not delete temp folders upon exit",
            "Prevent downloading of enclosures",
            "Allow Cloud Search",
            "Allow Cortana",
            "Allow Cortana above lock screen",
            "Allow indexing of encrypted files",
            "Allow search and Cortana to use location",
            "Allow search highlights",
            "Turn off KMS Client Online AVS Validation",
            "Disable all apps from Microsoft Store",
            "Only display the private store within the Microsoft Store",
            "Turn off Automatic Download and Install of updates",
            "Turn off the offer to update to the latest version of Windows",
            "Turn off the Store application",
            "Allow widgets",
            "Automatic Data Collection",
            "Notify Malicious",
            "Notify Password Reuse",
            "Notify Unsafe App",
            "Service Enabled",
            "Configure Windows Defender SmartScreen",
            "Enables or disables Windows Game Recording and Broadcasting",
            "Enable ESS with Supported Peripherals",
            "Allow suggested apps in Windows Ink Workspace",
            "Allow Windows Ink Workspace",
            "Allow user control over installs",
            "Always install with elevated privileges",
            "Prevent Internet Explorer security prompt for Windows Installer scripts",
            "Enable MPR notifications for the system",
            "Sign-in and lock last interactive user automatically after a restart",
            "Turn on PowerShell Script Block Logging",
            "Turn on PowerShell Transcription",
            "Allow Basic authentication",
            "Allow unencrypted traffic",
            "Disallow Digest authentication",
            "Allow remote server management through WinRM",
            "Disallow WinRM from storing RunAs credentials",
            "Allow Remote Shell Access",
            "Allow clipboard sharing with Windows Sandbox",
            "Allow networking in Windows Sandbox",
            "Prevent users from modifying settings",
            "No auto-restart with logged on users for scheduled automatic updates installations",
            "Configure Automatic Updates",
            "Configure Automatic Updates: Scheduled install day",
            "Enable features introduced via servicing that are off by default",
            "Remove access to “Pause updates” feature",
            "Manage preview builds",
            "Select when Preview Builds and Feature Updates are received",
            "Select when Quality Updates are received",
            "Enable optional updates",
        ],
    },
    {
        category: "Administrative Templates (User)",
        tests: [
            "Turn off toast notifications on the lock screen",
            "Turn off Help Experience Improvement Program",
            "Do not preserve zone information in file attachments",
            "Notify antivirus programs when opening attachments",
            "Configure Windows spotlight on lock screen",
            "Do not suggest third-party content in Windows spotlight",
            "Do not use diagnostic data for tailored experiences",
            "Turn off all Windows spotlight features",
            "Turn off Spotlight collection on Desktop",
            "Prevent users from sharing files within their profile",
            "Turn off Windows Copilot",
            "Always install with elevated privileges",
            "Prevent Codec Download",
        ],
    },
];
export default data;
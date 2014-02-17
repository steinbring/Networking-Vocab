// This is a list of vocabulary words for use within the app.  I stored it as an array of structs simply because it was easy.

// Define the introduction chapter
var arrIntroduction = [];
// Item #1
arrIntroduction.push({ word: 'A+', definition: 'The professional certification established by CompTIA that verifies knowledge about PC operation, repair, and management.', slug: 'APlus' });
// Item #2
arrIntroduction.push({ word: 'Access Server', definition: 'See remote access server', slug: 'AccessServer' });
// Item #3
arrIntroduction.push({ word: 'Address', definition: 'A number that uniquely identifies each workstation and device on a network.  Without unique addresses, computers on the network could not reliably communicate.', slug: 'Address' });
// Item #4
arrIntroduction.push({ word: 'Address Management', definition: 'The process of centrally administering a finite number of network addresses for an entire LAN. Usually this task can be accomplished without touching the client workstations.', slug: 'AddressManagement' });
// Item #5
arrIntroduction.push({ word: 'Addressing', definition: 'The scheme for assigning a unique identifying number to every workstation and device on the network. The type of addressing used on a network depends on its protocols and network operating system.', slug: 'Addressing' });
// Item #6
arrIntroduction.push({ word: 'Asset Management', definition: 'The process of collecting and storing data on the number and types of software and hardware assets in an organization\'s network.  The data collection is automated by electronically examining each client from a server.', slug: 'AssetManagement' });
// Item #7
arrIntroduction.push({ word: 'Backbone', definition: 'The part of a network to which segments and significant shared devices (such as routers, switches, and servers) connect.  A backbone is sometimes referred to as "a network of networks" because of its role in interconnecting smaller parts of a LAN or WAN.', slug: 'Backbone' });
// Item #8
arrIntroduction.push({ word: 'Backing up', definition: 'The process of copying critical data files to a secure storage area.  Often backups are preformed according to a formulaic schedule.', slug: 'BackingUp' });
// Item #9
arrIntroduction.push({ word: 'CCIE (Cisco Certified Internetwork Expert)', definition: 'An elite certification that recognizes expert-level installation, configuration, management, and troubleshooting skills on networks that use a range of Cisco Systems\' devices', slug: 'CCIE' });
// Item #10
arrIntroduction.push({ word: 'CCNA (Cisco Certifies Network Associate)', definition: 'A professional certification that attests to one\'s skills in installing, configuring, maintaining, and troubleshooting medium-sized networks that use Cisco Systems\' switches and routers.' , slug: 'CCNA' });
// Item #11
arrIntroduction.push({ word: 'Certification', definition: 'The process of mastering material pertaining to a particular hardware system, operating system, programming language, or other software program, then proving your mastery by passing a series of exams.', slug: 'certification' });
// Item #12
arrIntroduction.push({ word: 'Client', definition: 'A computer on the network that requests resources or services from another computer on a network.  In some cases, a client could also act as a server.  The term client may also refer to the user of a client workstation or a client software application installed on the workstation.', slug: 'client' });
// Item #13
arrIntroduction.push({ word: 'Client/Server Architecture', definition: 'A network design in which client computers use a centrally administered server to share data, data storage space, and devices.', slug: 'ClientServerArchitecture' });
// Item #14
arrIntroduction.push({ word: 'Client/Server Network', definition: 'A network that uses centrally administered computers, known as servers, to enable resource sharing for and to facilitate communication between the other computers on the network.', slug: 'ClientServerNetwork' });
// Item #15
arrIntroduction.push({ word: 'CompTIA (Computing Technology Industry Association)', definition: 'An association of computer resellers, manufacturers, and training companies that sets industry-wide standards for computer professionals.  CompTIA established and sponsors the A+ and Network+ (Net+) certifications.', slug: 'CompTIA' });
// Item #16
arrIntroduction.push({ word: 'Connectivity Device', definition: 'One of several types of specialized devices that allows two or more networks or multiple parts of one network to connect and exchange data.', slug: 'ConnectivityDevice' });
// Item #17
arrIntroduction.push({ word: 'Convergence', definition: 'The use of data networks to carry voice (or telephone), video, and other communications services in addition to data.', slug: 'Convergence' });
// Item #18
arrIntroduction.push({ word: 'File Server', definition: 'A specialized server that enables clients to share applications and data across the network.', slug: 'FileServer' });
// Item #19
arrIntroduction.push({ word: 'File Services', definition: 'The functions of a file server that allow users to share data files, applications, and storage areas.', slug: 'FileServices' });
// Item #20
arrIntroduction.push({ word: 'Host', definition: 'A computer that enables resource sharing by other computers on the same network.', slug: 'Host' });
// Item #21
arrIntroduction.push({ word: 'Internet', definition: 'A complex WAN that connects LANs and clients around the globe.', slug: 'Internet' });
// Item #22
arrIntroduction.push({ word: 'Internet Services', definition: 'The services that enable a network to communicate with the Internet including Web servers and browsers, file transfer capabilities, Internet addressing schemes, security filters, and a means for directly logging on to other computers.', slug: 'InternetServices' });
// Item #23
arrIntroduction.push({ word: 'LAN (Local Area Network)', definition: 'A network of computers and other devices that is confined to a relatively small space, such as one building or even one office.', slug: 'LAN' });
// Item #24
arrIntroduction.push({ word: 'License Tracking', definition: 'The process of determining the number of copies of a single application that are currently in use on the network and whether the number in use exceeds the authorized number of licenses.', slug: 'LicenseTracking' });
// Item #25
arrIntroduction.push({ word: 'Load Balancing', definition: 'The process of distributing data transfer activity evenly so that no single device in overwhelmed.', slug: 'LoadBalancing' });
// Item #26
arrIntroduction.push({ word: 'Mail Server', definition: 'A server that manages the storage and transfer of e-mail messages.', slug: 'MailServer' });
// Item #27
arrIntroduction.push({ word: 'Mail Services', definition: 'The network services that manage the storage and tranfer of e-mail between users on a network.  In addition to sending, receiving, and storing mail, mail services can include filtering, routing, notification, scheduling, and data exchange with other mail servers.', slug: 'MailServices' });
// Item #28
arrIntroduction.push({ word: 'MAN (Metropolitan Area Network)', definition: 'A network that is larger than a LAN, typically connecting clients and servers from multiple buildings, but within a limited geographic area. For example, a MAN could connect multiple city government buildings around a city\'s center.', slug: 'MAN' });
// Item #29
arrIntroduction.push({ word: 'Management Services', definition: 'The network services that centrally administer and simplify complicated management tasks on the network. Examples of management services include license tracking, security auditing, asset management, address management, software distribution, traffic monitoring, load balancing, and hardware diagnosis.', slug: 'ManagementServices' });
// Item #30
arrIntroduction.push({ word: 'MCITP (Microsoft Certified IT Professional)', definition: 'A professional certification established by Microsoft that demonstrates in-depth knowledge about Microsoft products.', slug: 'MCITP' });
// Item #31
arrIntroduction.push({ word: 'Motherboard', definition: 'The main circuit board that controls a computer', slug: 'Motherboard' });
// Item #32
arrIntroduction.push({ word: 'Network', definition: 'A group of computers and other devices (such as printers) that are connected by and can exchange data via some type of transmission media, such as a cable, a wire, or the atmosphere.', slug: 'Network' });
// Item #33
arrIntroduction.push({ word: 'Network+ (Net+)', definition: 'The professional certification established by CompTIA that verifies broad, vendor-independent networking technology skills, such as an understanding of protocols, topologies, networking hardware, and networking troubleshooting.', slug: 'NetworkPlus' });
// Item #34
arrIntroduction.push({ word: 'Network Services', definition: 'The functions provided by a network.', slug: 'NetworkServices' });
// Item #35
arrIntroduction.push({ word: 'NIC (Network Interface Card)', definition: 'The device that enables a workstation to connect to the network and communicate with other computers.  NICs are manufactured by several different companies and come with a variety of specifications that are tailored to the workstation\'s and the network\'s requirements. NICs are also called network adapters.', slug: 'NIC' });
// Item #36
arrIntroduction.push({ word: 'Node', definition: 'A computer or other device connected to a network, which has a unique address and is capable of sending or receiving data.', slug: 'Node' });
// Item #37
arrIntroduction.push({ word: 'NOS (Network Operating System)', definition: 'The software that runs on a server and enables the server to manage data, users, groups, security, applications, and other networking functions.  The most popular network operating systems are UNIX, Linux, and Microsoft Windows Server.', slug: 'NOS' });
// Item #38
arrIntroduction.push({ word: 'Packet', definition: 'A discrete unit of information sent from one node on a network to another.', slug: 'packet' });
// Item #39
arrIntroduction.push({ word: 'Peer-to-Peer Network', definition: 'A network in which every computer can communicate directly with every other computer. By default, no computer on a peer-to-peer network has more authority than another. However, each computer can be configured to share only some of its resources and keep other resources inaccessible to other nodes on the network.', slug: 'P2PNetwork' });
// Item #40
arrIntroduction.push({ word: 'PrintServices', definition: 'The network service that allows printers to be shared by several users on a network.', slug: 'PrintServices' });
// Item #41
arrIntroduction.push({ word: 'Protocol', definition: 'A standard method or format for communication between network devices. For example, some protocols ensure that data are tranfered in sequence and without error from one node on the network to another.  Other protocols ensure that data belonging to a Web page are formatted to appear correctly in a Web browser window.  Still others encode passwords and keep data transmissions secure.', slug: 'Protocol' });
// Item #42
arrIntroduction.push({ word: 'Remote Access Server', definition: 'A server that runs communications services that enable remote users to log on to a network. Also known as an access server.', slug: 'RemoteAccessServer' });
// Item #43
arrIntroduction.push({ word: 'Remote User', definition: 'A person working on a computer on a different network or in a different geographical location from the LAN\'s server.', slug: 'RemoteUser' });
// Item #44
arrIntroduction.push({ word: 'Resources', definition: 'The devices, data, and data storage space provided by a computer, whether stand-alone or shared.', slug: 'Resources' });
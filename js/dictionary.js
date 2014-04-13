// This is a list of vocabulary words for use within the app.  I stored it as an array of structs simply because it was easy.

// Define the introduction chapter
var arrChapterOne = [];
// Item #1
arrChapterOne.push({ word: 'A+', definition: 'The professional certification established by CompTIA that verifies knowledge about PC operation, repair, and management.', slug: 'APlus' });
// Item #2
arrChapterOne.push({ word: 'Access Server', definition: 'See remote access server', slug: 'AccessServer' });
// Item #3
arrChapterOne.push({ word: 'Address', definition: 'A number that uniquely identifies each workstation and device on a network.  Without unique addresses, computers on the network could not reliably communicate.', slug: 'Address' });
// Item #4
arrChapterOne.push({ word: 'Address Management', definition: 'The process of centrally administering a finite number of network addresses for an entire LAN. Usually this task can be accomplished without touching the client workstations.', slug: 'AddressManagement' });
// Item #5
arrChapterOne.push({ word: 'Addressing', definition: 'The scheme for assigning a unique identifying number to every workstation and device on the network. The type of addressing used on a network depends on its protocols and network operating system.', slug: 'Addressing' });
// Item #6
arrChapterOne.push({ word: 'Asset Management', definition: 'The process of collecting and storing data on the number and types of software and hardware assets in an organization\'s network.  The data collection is automated by electronically examining each client from a server.', slug: 'AssetManagement' });
// Item #7
arrChapterOne.push({ word: 'Backbone', definition: 'The part of a network to which segments and significant shared devices (such as routers, switches, and servers) connect.  A backbone is sometimes referred to as "a network of networks" because of its role in interconnecting smaller parts of a LAN or WAN.', slug: 'Backbone' });
// Item #8
arrChapterOne.push({ word: 'Backing up', definition: 'The process of copying critical data files to a secure storage area.  Often backups are preformed according to a formulaic schedule.', slug: 'BackingUp' });
// Item #9
arrChapterOne.push({ word: 'CCIE (Cisco Certified Internetwork Expert)', definition: 'An elite certification that recognizes expert-level installation, configuration, management, and troubleshooting skills on networks that use a range of Cisco Systems\' devices', slug: 'CCIE' });
// Item #10
arrChapterOne.push({ word: 'CCNA (Cisco Certifies Network Associate)', definition: 'A professional certification that attests to one\'s skills in installing, configuring, maintaining, and troubleshooting medium-sized networks that use Cisco Systems\' switches and routers.' , slug: 'CCNA' });
// Item #11
arrChapterOne.push({ word: 'Certification', definition: 'The process of mastering material pertaining to a particular hardware system, operating system, programming language, or other software program, then proving your mastery by passing a series of exams.', slug: 'certification' });
// Item #12
arrChapterOne.push({ word: 'Client', definition: 'A computer on the network that requests resources or services from another computer on a network.  In some cases, a client could also act as a server.  The term client may also refer to the user of a client workstation or a client software application installed on the workstation.', slug: 'client' });
// Item #13
arrChapterOne.push({ word: 'Client/Server Architecture', definition: 'A network design in which client computers use a centrally administered server to share data, data storage space, and devices.', slug: 'ClientServerArchitecture' });
// Item #14
arrChapterOne.push({ word: 'Client/Server Network', definition: 'A network that uses centrally administered computers, known as servers, to enable resource sharing for and to facilitate communication between the other computers on the network.', slug: 'ClientServerNetwork' });
// Item #15
arrChapterOne.push({ word: 'CompTIA (Computing Technology Industry Association)', definition: 'An association of computer resellers, manufacturers, and training companies that sets industry-wide standards for computer professionals.  CompTIA established and sponsors the A+ and Network+ (Net+) certifications.', slug: 'CompTIA' });
// Item #16
arrChapterOne.push({ word: 'Connectivity Device', definition: 'One of several types of specialized devices that allows two or more networks or multiple parts of one network to connect and exchange data.', slug: 'ConnectivityDevice' });
// Item #17
arrChapterOne.push({ word: 'Convergence', definition: 'The use of data networks to carry voice (or telephone), video, and other communications services in addition to data.', slug: 'Convergence' });
// Item #18
arrChapterOne.push({ word: 'File Server', definition: 'A specialized server that enables clients to share applications and data across the network.', slug: 'FileServer' });
// Item #19
arrChapterOne.push({ word: 'File Services', definition: 'The functions of a file server that allow users to share data files, applications, and storage areas.', slug: 'FileServices' });
// Item #20
arrChapterOne.push({ word: 'Host', definition: 'A computer that enables resource sharing by other computers on the same network.', slug: 'Host' });
// Item #21
arrChapterOne.push({ word: 'Internet', definition: 'A complex WAN that connects LANs and clients around the globe.', slug: 'Internet' });
// Item #22
arrChapterOne.push({ word: 'Internet Services', definition: 'The services that enable a network to communicate with the Internet including Web servers and browsers, file transfer capabilities, Internet addressing schemes, security filters, and a means for directly logging on to other computers.', slug: 'InternetServices' });
// Item #23
arrChapterOne.push({ word: 'LAN (Local Area Network)', definition: 'A network of computers and other devices that is confined to a relatively small space, such as one building or even one office.', slug: 'LAN' });
// Item #24
arrChapterOne.push({ word: 'License Tracking', definition: 'The process of determining the number of copies of a single application that are currently in use on the network and whether the number in use exceeds the authorized number of licenses.', slug: 'LicenseTracking' });
// Item #25
arrChapterOne.push({ word: 'Load Balancing', definition: 'The process of distributing data transfer activity evenly so that no single device in overwhelmed.', slug: 'LoadBalancing' });
// Item #26
arrChapterOne.push({ word: 'Mail Server', definition: 'A server that manages the storage and transfer of e-mail messages.', slug: 'MailServer' });
// Item #27
arrChapterOne.push({ word: 'Mail Services', definition: 'The network services that manage the storage and tranfer of e-mail between users on a network.  In addition to sending, receiving, and storing mail, mail services can include filtering, routing, notification, scheduling, and data exchange with other mail servers.', slug: 'MailServices' });
// Item #28
arrChapterOne.push({ word: 'MAN (Metropolitan Area Network)', definition: 'A network that is larger than a LAN, typically connecting clients and servers from multiple buildings, but within a limited geographic area. For example, a MAN could connect multiple city government buildings around a city\'s center.', slug: 'MAN' });
// Item #29
arrChapterOne.push({ word: 'Management Services', definition: 'The network services that centrally administer and simplify complicated management tasks on the network. Examples of management services include license tracking, security auditing, asset management, address management, software distribution, traffic monitoring, load balancing, and hardware diagnosis.', slug: 'ManagementServices' });
// Item #30
arrChapterOne.push({ word: 'MCITP (Microsoft Certified IT Professional)', definition: 'A professional certification established by Microsoft that demonstrates in-depth knowledge about Microsoft products.', slug: 'MCITP' });
// Item #31
arrChapterOne.push({ word: 'Motherboard', definition: 'The main circuit board that controls a computer', slug: 'Motherboard' });
// Item #32
arrChapterOne.push({ word: 'Network', definition: 'A group of computers and other devices (such as printers) that are connected by and can exchange data via some type of transmission media, such as a cable, a wire, or the atmosphere.', slug: 'Network' });
// Item #33
arrChapterOne.push({ word: 'Network+ (Net+)', definition: 'The professional certification established by CompTIA that verifies broad, vendor-independent networking technology skills, such as an understanding of protocols, topologies, networking hardware, and networking troubleshooting.', slug: 'NetworkPlus' });
// Item #34
arrChapterOne.push({ word: 'Network Services', definition: 'The functions provided by a network.', slug: 'NetworkServices' });
// Item #35
arrChapterOne.push({ word: 'NIC (Network Interface Card)', definition: 'The device that enables a workstation to connect to the network and communicate with other computers.  NICs are manufactured by several different companies and come with a variety of specifications that are tailored to the workstation\'s and the network\'s requirements. NICs are also called network adapters.', slug: 'NIC' });
// Item #36
arrChapterOne.push({ word: 'Node', definition: 'A computer or other device connected to a network, which has a unique address and is capable of sending or receiving data.', slug: 'Node' });
// Item #37
arrChapterOne.push({ word: 'NOS (Network Operating System)', definition: 'The software that runs on a server and enables the server to manage data, users, groups, security, applications, and other networking functions.  The most popular network operating systems are UNIX, Linux, and Microsoft Windows Server.', slug: 'NOS' });
// Item #38
arrChapterOne.push({ word: 'Packet', definition: 'A discrete unit of information sent from one node on a network to another.', slug: 'packet' });
// Item #39
arrChapterOne.push({ word: 'Peer-to-Peer Network', definition: 'A network in which every computer can communicate directly with every other computer. By default, no computer on a peer-to-peer network has more authority than another. However, each computer can be configured to share only some of its resources and keep other resources inaccessible to other nodes on the network.', slug: 'P2PNetwork' });
// Item #40
arrChapterOne.push({ word: 'Print Services', definition: 'The network service that allows printers to be shared by several users on a network.', slug: 'PrintServices' });
// Item #41
arrChapterOne.push({ word: 'Protocol', definition: 'A standard method or format for communication between network devices. For example, some protocols ensure that data are tranfered in sequence and without error from one node on the network to another.  Other protocols ensure that data belonging to a Web page are formatted to appear correctly in a Web browser window.  Still others encode passwords and keep data transmissions secure.', slug: 'Protocol' });
// Item #42
arrChapterOne.push({ word: 'Remote Access Server', definition: 'A server that runs communications services that enable remote users to log on to a network. Also known as an access server.', slug: 'RemoteAccessServer' });
// Item #43
arrChapterOne.push({ word: 'Remote User', definition: 'A person working on a computer on a different network or in a different geographical location from the LAN\'s server.', slug: 'RemoteUser' });
// Item #44
arrChapterOne.push({ word: 'Resources', definition: 'The devices, data, and data storage space provided by a computer, whether stand-alone or shared.', slug: 'Resources' });
// Item #45
arrChapterOne.push({ word: 'Restoring', definition: 'The process of retrieving files from a backup. It is necessary to restore files if the original files are lost or deleted.', slug: 'Restoring' });
// Item #46
arrChapterOne.push({ word: 'Scalable', definition: 'The property of a network that allows you to add nodes or increase its size easily.', slug: 'Scalable' });
// Item #47
arrChapterOne.push({ word: 'Security Auditing', definition: 'The process of evaluating security measures currently in place on a network and notifying the network administrator if a security breach occurs.', slug: 'SecurityAuditing' });
// Item #48
arrChapterOne.push({ word: 'Segment', definition: 'A part of a network. Usually, a segment is composed of a group of nodes that share the same communications channel for all their traffic.', slug: 'Segment' });
// Item #49
arrChapterOne.push({ word: 'Server', definition: 'A computer on the network that manages shared resources.  Servers usually have more processing power, memory, and hard disk than clients.  They run network operating software that can manage not only data, but also users, groups, security, and applications on the network.', slug: 'Server' });
// Item #50
arrChapterOne.push({ word: 'Sneakernet', definition: 'A way of exchanging data between computers that are not connected on a network.  The term "sneakernet" was coined before the widespread use of networks, when data was copied from a computer to a removable storage device such as a floppy disk, carried (presumably by someone wearing sneakers) to another computer, then copied from the storage device onto the second computer.', slug: 'Sneakernet' });
// Item #51
arrChapterOne.push({ word: 'Soft Skills', definition: 'The skills such as customer relations, oral and written communications, dependability, teamwork, and leadership abilities, which are not easily measured, but are nevertheless important in a networking career.', slug: 'SoftSkills' });
// Item #52
arrChapterOne.push({ word: 'Software Distribution', definition: 'The process of automatically transferring a data file or installing a software application from the server to a client on the network.', slug: 'SoftwareDistribution' });
// Item #53
arrChapterOne.push({ word: 'Spam', definition: 'Unsolicited, unwanted e-mail', slug: 'Spam' });
// Item #54
arrChapterOne.push({ word: 'Stand-alone Computer', definition: 'A computer that uses applications and data only from its local disks and that is not connected to a network.', slug: 'StandAloneComputer' });
// Item #55
arrChapterOne.push({ word: 'Topology', definition: 'The physical layout of computers on a network.', slug: 'Topology' });
// Item #56
arrChapterOne.push({ word: 'Traffic', definition: 'The data transmission and processing activity taking place on a computer network at any given time.', slug: 'Traffic' });
// Item #57
arrChapterOne.push({ word: 'Traffic Monitoring', definition: 'The process of determining how much data transfer activity is taking place on a network or network segment and notifying administrators when a segment becomes overloaded.', slug: 'TrafficMonitoring' });
// Item #58
arrChapterOne.push({ word: 'Unified Communications', definition: 'The centralized management of multiple types of network-based communications, such as voice, video, fax, and messaging services', slug: 'UnifiedCommunications' });
// Item #59
arrChapterOne.push({ word: 'User', definition: 'A person who uses a computer.', slug: 'User' });
// Item #60
arrChapterOne.push({ word: 'WAN (Wide Area Network)', definition: 'A network that spans a long distance and connects two or more LANs.', slug: 'WAN' });
// Item #61
arrChapterOne.push({ word: 'Web Server', definition: 'A computer that manages Web site services, such as supplying a Web page to multiple users on demand.', slug: 'WebServer' });
// Item #62
arrChapterOne.push({ word: 'Workstation', definition: 'A computer that runs a desktop operating system and connects to a network.', slug: 'Workstation' });


// Define the networking standards chapter
var arrChapterTwo = [];

arrChapterTwo.push({ word: '802.2', definition: 'The IEEE standard for error and flow control in data frames', slug: '8022' });

arrChapterTwo.push({ word: '802.3', definition: 'The IEEE standard for Ethernet networking devices and data handling (using the CSMA/CD access method)', slug: '8023' });

arrChapterTwo.push({ word: '802.5', definition: 'The IEEE standard for token ring networking devices', slug: '8025' });

arrChapterTwo.push({ word: '802.11', definition: 'The IEEE standard for wireless networking.', slug: '80211' });

arrChapterTwo.push({ word: 'ACK (acknowledgement)', definition: 'A response generated at the Transport layer of the OSI model that confirms to a sender that its frame was received. The ACK packet is the third of three in the three-step process of establishing a connection.', slug: 'ack' });

arrChapterTwo.push({ word: 'ANSI (American National Standards Institute)', definition: 'An organization composed of more than 1000 representatives from industry and government who together determine standards for the electronics industry in addition to other fields, such as chemical and nuclear engineering, health and safety, and construction.', slug: 'ansi' });

arrChapterTwo.push({ word: 'API (Application Programming Interface)', definition: 'A set of routines that make up part of a software application.', slug: 'api' });

arrChapterTwo.push({ word: 'Application Layer', definition: 'The seventh layer of the OSI model. Application layer protocols enable software programs to negotiate formatting, procedural, security, synchronization, and other requirements with the network.', slug: 'ApplicationLayer' });

arrChapterTwo.push({ word: 'Checksum', definition: 'A method of error checking that determines if the contents of an arriving data unit match the contents of the data unit sent by the source.', slug: 'checksum' });

arrChapterTwo.push({ word: 'Connection Oriented', definition: 'A type of Transport layer protocol that requires the establishment of a connection between communicating nodes before it will transmit data.', slug: 'ConnectionOriented' });

arrChapterTwo.push({ word: 'Connectionless', definition: 'A type of Transport layer protocol that services a request without requiring a verifies sessio and without guaranteeing delivery of data.', slug: 'Connectionless' });

arrChapterTwo.push({ word: 'CRC (Cyclical Redundancy Checks)', definition: 'An algorithm (or mathmatical routine) used to verify the accuracy of data contained in a data frame.', slug: 'crc' });

arrChapterTwo.push({ word: 'Data Link Layer', definition: 'The second layer in the OSI model. The Data Link layer bridges th networking media with the Network layer. Its primary function is to divide the data it receives from the Network layer into frames that can then be transmitted by the Physical layer.', slug: 'DataLinkLayer' });

arrChapterTwo.push({ word: 'EIA (Electronic Industries alliance)', definition: 'A trade organization composed of representatives from electronics manufacturing firms across the United States that sets standards for electronic equipment and lobbies for legislation favorable to the growth of the computer and electronics industries.', slug: 'EIA' });

arrChapterTwo.push({ word: 'Encapsulate', definition: 'The process of wrapping one layer\'s PDU with protocol information so that it can be interpreted by a lower layer. For examle, Data Link layer protocols encapsulate Network layer packets in frames.', slug: 'Encapsulate' });

arrChapterTwo.push({ word: 'Ethernet', definition: 'A networking technology originally developed at Xerox in the 1970s and improved by Digital Equipment Corporation, Intel, and Xerox. Ethernet, which is the most common form of networking transmission technology, follows the IEEE 802.3 standard.', slug: 'ethernet' });

arrChapterTwo.push({ word: 'EUI-64 (Extended Unique Identifier-64)', definition: 'The IEEE standard defining 64-bit physical addresses.  In the EUI-64 scheme, the OUI portion of an address is 24 bit in length.  A 40-bit extension identifier makes up the rest of the physical address to total 64 bits.', slug: 'EUI64' });

arrChapterTwo.push({ word: 'Extension Identifier', definition: 'A unique set of characters assigned to each NIC by its manufacturer.  In the traditional, 48-bit physical addressing scheme , the extension identifier is 24 bits long. In EUI-64, the extension identifier is 40 bits long.', slug: 'ExtensionIdentifier' });

arrChapterTwo.push({ word: 'FCS (Frame Check Sequence)', definition: 'The field in a frame for ensuring that data carried by the frame arrives intact.  It uses an algorithm, such as CRC, to accomplish this verification.', slug: 'FCS' });

arrChapterTwo.push({ word: 'Flow Control', definition: 'A method of gauging the appropriate rate of data transmission based on how fast the recipient can accept data.', slug: 'FlowControl' });

arrChapterTwo.push({ word: 'Fragmentation', definition: 'A Network layer service that subdivides segments it receives from the Transport layer into smaller packets.', slug: 'Fragmentation' });

arrChapterTwo.push({ word: 'Frame', definition: 'A package for data that includes not only the raw data, or "Payload," but also the sender\'s and recipient\'s addressing and control information. Frames are generated at the Data Link layer of the OSI model and are issued to the network at the Physical layer.', slug: 'Frame' });

arrChapterTwo.push({ word: 'HTTP (Hypertext Transport Protocol)', definition: 'An Application layer protocol that formulates and interprets requests between Web clients and servers.', slug: 'HTTP' });

arrChapterTwo.push({ word: 'IAB (Internet Architecture Board)', definition: 'A technical advisory group of researchers and technical professionals responsible for Internet growth and management strategy, resolution of technical disputes, and standards oversight.', slug: 'IAB' });

arrChapterTwo.push({ word: 'IANA (Internet Assigned Numbers Authority)', definition: 'A nonprofit, United States government-funded group that was established at the University of Southern California and charged with managing IP address allocation and the Domain Name system.  The oversight for many of IANA\'s functions was given to ICANN in 1998; however IANA continues to perform Internet addressing and Domain Name System administration.', slug: 'IANA' });

arrChapterTwo.push({ word: 'ICANN (Internet Corporation for Assigned Names and Numbers)', definition: 'The nonprofit corporation currently designated by the United States government to maintain and assign IP addresses.', slug: 'ICANN' });

arrChapterTwo.push({ word: 'IEEE (Institute of Electrical and Electronics Engineers)', definition: 'An international society composed of engineering professionals. Its goals are to promote development and education in the electrical engineering and computer science fields.', slug: 'IEEE' });

arrChapterTwo.push({ word: 'IETF (Internet Engineering Task Force)', definition: 'An organization that sets standards for how systems communicate over the Internet (for example, how protocols operate and interact).', slug: 'IETF' });

arrChapterTwo.push({ word: 'IP (Internet Protocol)', definition: 'A core protocol in the TCP/IP suite that operates in the Network layer of the OSI model and provides information about how and where data should be delivered. IP is the subprotocol that enables TCP/IP to internetwork.', slug: 'IP' });

arrChapterTwo.push({ word: 'IP Address (Internet Protocol Address)', definition: 'The Network layer address assigned to nodes to uniquely identify them on a TCP/IP network. IPv4 addresses consist of 32 bits divided into four octets, or bytes. IPv6 addresses are composed of eight 16-bit fields, for a total of 128 bits.', slug: 'IPAddress' });

arrChapterTwo.push({ word: 'ISO (International Organization for Standardization)', definition: 'A collection of standards organizations representing 162 countries and headquarters located in Geneva, Switzerland. Its goal is to establish international technical standards to facilitate the global exchange of information and barrier-free trade.', slug: 'ISO' });

arrChapterTwo.push({ word: 'ISOC (Internet Society)', definition: 'A professional organization with members from 90 chapters around the world that helps to establish technical standards for the internet.', slug: 'ISOC' });

arrChapterTwo.push({ word: 'ISP (Internet Service Provider)', definition: 'A business that provides organizations and individuals with Internet access and often, other services, such as e-mail and Web hosting.', slug: 'ISP' });

arrChapterTwo.push({ word: 'ITU (International Telecommunication Union)', definition: 'A United Nations agency that regulates international telecommunications and provides developing countries with technical expertise and equipment to advance their technological bases.', slug: 'ITU' });

arrChapterTwo.push({ word: 'LLC (Logical Link Control) sublayer', definition: 'The upper sublayer in the Data Link layer.  The LLC provides a common interface and supplies reliability and flow control devices.', slug: 'LLC' });

arrChapterTwo.push({ word: 'MAC (Media Access Control) sublayer', definition: 'The lower sublayer of the Data Link layer. The MAC appends the physical address of the destination computer onto the frame.', slug: 'MAC' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });

arrChapterTwo.push({ word: '', definition: '', slug: '' });


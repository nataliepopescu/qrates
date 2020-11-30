initSidebarItems({"enum":[["AddressFamily","These constants specify the protocol family to be used in `socket` and `socketpair`"],["ControlMessage","A type-safe zero-copy wrapper around a single control message, as used wih `sendmsg`.  More types may be added to this enum; do not exhaustively pattern-match it."],["ControlMessageOwned","A type-safe wrapper around a single control message, as used with `recvmsg`."],["InetAddr",""],["IpAddr",""],["Shutdown",""],["SockAddr","Represents a socket address"],["SockLevel","The protocol level at which to get / set socket options. Used as an argument to `getsockopt` and `setsockopt`."],["SockProtocol","Constants used in `socket` and `socketpair` to specify the protocol to use."],["SockType","These constants are used to specify the communication semantics when creating a socket with `socket()`"]],"fn":[["accept","Accept a connection on a socket"],["accept4","Accept a connection on a socket"],["bind","Bind a name to a socket"],["connect","Initiate a connection on a socket"],["getpeername","Get the address of the peer connected to the socket `fd`."],["getsockname","Get the current address to which the socket `fd` is bound."],["getsockopt","Get the current value for the requested socket option"],["listen","Listen for connections on a socket"],["recv","Receive data from a connection-oriented socket. Returns the number of bytes read"],["recvfrom","Receive data from a connectionless or connection-oriented socket. Returns the number of bytes read and the socket address of the sender."],["recvmsg","Receive message in scatter-gather vectors from a socket, and optionally receive ancillary data into the provided buffer. If no ancillary data is desired, use () as the type parameter."],["send","Send data to a connection-oriented socket. Returns the number of bytes read"],["sendmsg","Send data in scatter-gather vectors to a socket, possibly accompanied by ancillary data. Optionally direct the message at the given address, as with sendto."],["sendto","Send a message to a socket"],["setsockopt","Sets the value for the requested socket option"],["shutdown","Shut down part of a full-duplex connection."],["sockaddr_storage_to_addr","Return the appropriate `SockAddr` type from a `sockaddr_storage` of a certain size.  In C this would usually be done by casting.  The `len` argument should be the number of bytes in the `sockaddr_storage` that are actually allocated and valid.  It must be at least as large as all the useful parts of the structure.  Note that in the case of a `sockaddr_un`, `len` need not include the terminating null."],["socket","Create an endpoint for communication"],["socketpair","Create a pair of connected sockets"]],"mod":[["sockopt",""]],"struct":[["AlgAddr",""],["CmsgIterator",""],["CmsgSpace","A structure used to make room in a cmsghdr passed to recvmsg. The size and alignment match that of a cmsghdr followed by a T, but the fields are not accessible, as the actual types will change on a call to recvmsg."],["IpMembershipRequest","Request for multicast socket operations"],["Ipv4Addr",""],["Ipv6Addr",""],["Ipv6MembershipRequest","Request for ipv6 multicast socket operations"],["LinkAddr","Hardware Address"],["MsgFlags","Flags for send/recv and their relatives"],["NetlinkAddr",""],["RecvMsg",""],["SockFlag","Additional socket options"],["UnixAddr","A wrapper around `sockaddr_un`."],["UnixCredentials","Unix credentials of the sending process."],["cmsghdr",""],["msghdr",""],["sockaddr",""],["sockaddr_in",""],["sockaddr_in6",""],["sockaddr_storage",""],["sockaddr_un",""]],"trait":[["CmsgBuffer","A type that can be used to store ancillary data received by `recvmsg`"],["GetSockOpt","Represents a socket option that can be accessed or set. Used as an argument to `getsockopt`"],["SetSockOpt","Represents a socket option that can be accessed or set. Used as an argument to `setsockopt`"]],"type":[["sa_family_t",""]]});
export const sampleChats = [
  {
    avatar: ["/logo.svg"],
    name: "Ravi",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["/logo.svg"],
    name: "Joe",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["/logo.svg"],
    name: "Arjun",
    _id: "3",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["/logo.svg"],
    name: "Ram",
    _id: "4",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["/logo.svg", "/logo.svg", "/logo.svg", "/logo.svg"],
    name: "Aman",
    _id: "5",
    groupChat: true,
    members: ["1", "2"],
  },
  {
    avatar: ["/logo.svg"],
    name: "Rahul",
    _id: "6",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["/logo.svg"],
    name: "John",
    _id: "7",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["/logo.svg"],
    name: "DJ",
    _id: "8",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["/logo.svg"],
    name: "Jesica",
    _id: "9",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["/logo.svg", "/logo.svg", "/logo.svg", "/logo.svg"],
    name: "Richa",
    _id: "10",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["/logo.svg"],
    name: "Jesica",
    _id: "9",
  },
  {
    avatar: ["/logo.svg"],
    name: "Richa",
    _id: "10",
  },
];

export const sampleNotifications = [
  {
    sender: { avatar: ["/logo.svg"], name: "Jesica" },
    _id: "9",
  },
  {
    sender: {
      avatar: ["/logo.svg", "/logo.svg", "/logo.svg", "/logo.svg"],
      name: "Richa",
    },
    _id: "10",
  },
];

export const sampleMessge = [
  {
    attachments: [
      {
        public_id: "asdjfh",
        url: "/robot.gif",
      },
    ],
    content: "Hello there this is a sample txt",
    _id: "kasjfhlakusd",
    sender: { _id: "user._id", name: "Chaman" },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "asddfjhdsfjfh",
        url: "/robot.gif",
      },
    ],
    content: "Hello there this is a sample txt number 2",
    _id: "kasjfhlakjhiusd",
    sender: { _id: "fjsdhfiuasf", name: "aman" },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];

export const DashboardData = {
  users: [
    {
      avatar: ["/logo.svg"],
      name: "Richa",
      _id: "10",
      username: "Richa11",
      friends: 20,
      groups: 5,
    },
    {
      avatar: ["/logo.svg"],
      name: "Ravi",
      _id: "11",
      username: "Ravi19",
      friends: 1,
      groups: 5,
    },
  ],
  chats: [{
    avatar: ["/logo.svg"],
    name: "Meet Up",
    _id: "10",
    groupChat: false,
    members: [{_id: "10", avatar: "/logo.svg"}, {_id: "11", avatar: "/logo.svg"}],
    totalMembers: 2,
    totalMessages: 20,
    creator: {
      name: "Ravi Raj",
      avatar: ["/logo.svg"],
    }
  },
  {
  avatar: ["/logo.svg"],
    name: "Darjeeling jana haiii",
    _id: "11",
    groupChat: false,
    members: [{_id: "10", avatar: "/logo.svg"}, {_id: "11", avatar: "/logo.svg"}],
    totalMembers: 10,
    totalMessages: 200,
    creator: {
      name: "DJ",
      avatar: ["/logo.svg"],
    }
  },],

  messages: [{
    attachments: [],
    content: "Hello there I am Ravi ",
    _id: "sjdfgjhf",
    sender: {
      _id: "userID",
      avatar: ["/logo.svg"],
      name: "Ravi Raj",
    },
    chat: "chatId",
    groupChat: false,
    createdAt: "2024-02-12T10:41:30.6302",
  },
  {
    attachments: [
      {
        public_id: "sdfsdaf",
        url: "https://cdn.pixabay.com/photo/2024/05/15/01/11/cat-8762410_640.png"
      }
    ],
    content: "Hello there I am Rahul ",
    _id: "sjddfsdffgjhf",
    sender: {
      _id: "usedsfsdrID",
      avatar: ["/logo.svg"],
      name: "Rahul Raj",
    },
    chat: "chatIdsdf",
    groupChat: true,
    createdAt: "2024-02-12T10:41:30.6302",
  },
]
};

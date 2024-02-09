export type Pier = {
    "version": "0.1.0",
    "name": "pier",
    "instructions": [
      {
        "name": "initialize",
        "accounts": [],
        "args": [
          {
            "name": "sellAddress",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "test",
        "accounts": [
          {
            "name": "testAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "signer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "sellAddress",
            "type": "publicKey"
          },
          {
            "name": "number",
            "type": "u64"
          }
        ]
      },
      {
        "name": "create",
        "accounts": [
          {
            "name": "book",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "signer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "sellAddress",
            "type": "publicKey"
          },
          {
            "name": "sellAmount",
            "type": "u64"
          },
          {
            "name": "paymentAddress",
            "type": "publicKey"
          },
          {
            "name": "paymentAmount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "createUserStats",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userStats",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "name",
            "type": "string"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "Book",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "user",
              "type": "publicKey"
            },
            {
              "name": "sellAddress",
              "type": "publicKey"
            },
            {
              "name": "sellAmount",
              "type": "u64"
            },
            {
              "name": "paymentAddress",
              "type": "publicKey"
            },
            {
              "name": "paymentAmount",
              "type": "u64"
            },
            {
              "name": "isActive",
              "type": "bool"
            }
          ]
        }
      },
      {
        "name": "TestAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "a",
              "type": "u64"
            },
            {
              "name": "b",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "UserStats",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "level",
              "type": "u16"
            },
            {
              "name": "name",
              "type": "string"
            },
            {
              "name": "bump",
              "type": "u8"
            }
          ]
        }
      }
    ],
    "metadata": {
      "address": "AMy3eYbWzhYhXskNPCefUJ6BUyqH53LP4TrsRj5o6ffq"
    }
  };

export const Pier: Pier = {
    "version": "0.1.0",
    "name": "pier",
    "instructions": [
      {
        "name": "initialize",
        "accounts": [],
        "args": [
          {
            "name": "sellAddress",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "test",
        "accounts": [
          {
            "name": "testAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "signer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "sellAddress",
            "type": "publicKey"
          },
          {
            "name": "number",
            "type": "u64"
          }
        ]
      },
      {
        "name": "create",
        "accounts": [
          {
            "name": "book",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "signer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "sellAddress",
            "type": "publicKey"
          },
          {
            "name": "sellAmount",
            "type": "u64"
          },
          {
            "name": "paymentAddress",
            "type": "publicKey"
          },
          {
            "name": "paymentAmount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "createUserStats",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userStats",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "name",
            "type": "string"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "Book",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "user",
              "type": "publicKey"
            },
            {
              "name": "sellAddress",
              "type": "publicKey"
            },
            {
              "name": "sellAmount",
              "type": "u64"
            },
            {
              "name": "paymentAddress",
              "type": "publicKey"
            },
            {
              "name": "paymentAmount",
              "type": "u64"
            },
            {
              "name": "isActive",
              "type": "bool"
            }
          ]
        }
      },
      {
        "name": "TestAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "a",
              "type": "u64"
            },
            {
              "name": "b",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "UserStats",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "level",
              "type": "u16"
            },
            {
              "name": "name",
              "type": "string"
            },
            {
              "name": "bump",
              "type": "u8"
            }
          ]
        }
      }
    ],
    "metadata": {
      "address": "AMy3eYbWzhYhXskNPCefUJ6BUyqH53LP4TrsRj5o6ffq"
    }
  };

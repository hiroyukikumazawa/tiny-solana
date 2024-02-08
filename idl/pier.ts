export type Pier = {
    "version": "0.1.0",
    "name": "pier",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [],
            "args": []
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
                    "name": "user",
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
        }
    ],
    "metadata": {
        "address": "BbZb5jgR5hyrfeP261CcxV3CTB64nLSvdyysuens4Axd"
    }
};

export const Pier: Pier = {
    "version": "0.1.0",
    "name": "pier",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [],
            "args": []
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
                    "name": "user",
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
        }
    ],
    "metadata": {
        "address": "BbZb5jgR5hyrfeP261CcxV3CTB64nLSvdyysuens4Axd"
    }
};

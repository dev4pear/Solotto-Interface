export type SolotLottery = {
    "version": "0.1.0",
    "name": "solot_lottery",
    "instructions": [
        {
            "name": "initState",
            "accounts": [
                {
                    "name": "state",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "vrf",
                    "isMut": false,
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
                    "name": "params",
                    "type": {
                        "defined": "InitStateParams"
                    }
                }
            ]
        },
        {
            "name": "updateResult",
            "accounts": [
                {
                    "name": "state",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vrf",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "params",
                    "type": {
                        "defined": "UpdateResultParams"
                    }
                }
            ]
        },
        {
            "name": "requestResult",
            "accounts": [
                {
                    "name": "state",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "vrf",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "oracleQueue",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "queueAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "dataBuffer",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "permission",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "escrow",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "programState",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "switchboardProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "recentBlockhashes",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "params",
                    "type": {
                        "defined": "RequestResultParams"
                    }
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "VrfClient",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "bump",
                        "type": "u8"
                    },
                    {
                        "name": "maxResult",
                        "type": "u64"
                    },
                    {
                        "name": "resultBuffer",
                        "type": {
                            "array": [
                                "u8",
                                32
                            ]
                        }
                    },
                    {
                        "name": "result",
                        "type": "u128"
                    },
                    {
                        "name": "lastTimestamp",
                        "type": "i64"
                    },
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "vrf",
                        "type": "publicKey"
                    },
                    {
                        "name": "permissionBump",
                        "type": "u8"
                    },
                    {
                        "name": "switchboardStateBump",
                        "type": "u8"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "InitStateParams",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "maxResult",
                        "type": "u64"
                    },
                    {
                        "name": "permissionBump",
                        "type": "u8"
                    },
                    {
                        "name": "switchboardStateBump",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "RequestResultParams",
            "type": {
                "kind": "struct",
                "fields": []
            }
        },
        {
            "name": "UpdateResultParams",
            "type": {
                "kind": "struct",
                "fields": []
            }
        }
    ],
    "events": [
        {
            "name": "RequestingRandomness",
            "fields": [
                {
                    "name": "vrfClient",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "maxResult",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "timestamp",
                    "type": "i64",
                    "index": false
                }
            ]
        },
        {
            "name": "VrfClientInvoked",
            "fields": [
                {
                    "name": "vrfClient",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "timestamp",
                    "type": "i64",
                    "index": false
                }
            ]
        },
        {
            "name": "VrfClientResultUpdated",
            "fields": [
                {
                    "name": "vrfClient",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "result",
                    "type": "u128",
                    "index": false
                },
                {
                    "name": "resultBuffer",
                    "type": {
                        "array": [
                            "u8",
                            32
                        ]
                    },
                    "index": false
                },
                {
                    "name": "timestamp",
                    "type": "i64",
                    "index": false
                }
            ]
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "InvalidSwitchboardAccount",
            "msg": "Not a valid Switchboard account"
        },
        {
            "code": 6001,
            "name": "MaxResultExceedsMaximum",
            "msg": "The max result must not exceed u64"
        },
        {
            "code": 6002,
            "name": "EmptyCurrentRoundResult",
            "msg": "Current round result is empty"
        },
        {
            "code": 6003,
            "name": "InvalidAuthorityError",
            "msg": "Invalid authority account provided."
        },
        {
            "code": 6004,
            "name": "InvalidVrfAccount",
            "msg": "Invalid VRF account provided."
        },
        {
            "code": 6005,
            "name": "VrfClientCloseNotReady",
            "msg": "VRF client is not ready to be closed."
        },
        {
            "code": 6006,
            "name": "VrfCloseNotReady",
            "msg": "VRF account is not ready to be closed."
        }
    ]
};

export const IDL: SolotLottery = {
    "version": "0.1.0",
    "name": "solot_lottery",
    "instructions": [
        {
            "name": "initState",
            "accounts": [
                {
                    "name": "state",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "vrf",
                    "isMut": false,
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
                    "name": "params",
                    "type": {
                        "defined": "InitStateParams"
                    }
                }
            ]
        },
        {
            "name": "updateResult",
            "accounts": [
                {
                    "name": "state",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vrf",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "params",
                    "type": {
                        "defined": "UpdateResultParams"
                    }
                }
            ]
        },
        {
            "name": "requestResult",
            "accounts": [
                {
                    "name": "state",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "vrf",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "oracleQueue",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "queueAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "dataBuffer",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "permission",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "escrow",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "programState",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "switchboardProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "recentBlockhashes",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "params",
                    "type": {
                        "defined": "RequestResultParams"
                    }
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "VrfClient",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "bump",
                        "type": "u8"
                    },
                    {
                        "name": "maxResult",
                        "type": "u64"
                    },
                    {
                        "name": "resultBuffer",
                        "type": {
                            "array": [
                                "u8",
                                32
                            ]
                        }
                    },
                    {
                        "name": "result",
                        "type": "u128"
                    },
                    {
                        "name": "lastTimestamp",
                        "type": "i64"
                    },
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "vrf",
                        "type": "publicKey"
                    },
                    {
                        "name": "permissionBump",
                        "type": "u8"
                    },
                    {
                        "name": "switchboardStateBump",
                        "type": "u8"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "InitStateParams",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "maxResult",
                        "type": "u64"
                    },
                    {
                        "name": "permissionBump",
                        "type": "u8"
                    },
                    {
                        "name": "switchboardStateBump",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "RequestResultParams",
            "type": {
                "kind": "struct",
                "fields": []
            }
        },
        {
            "name": "UpdateResultParams",
            "type": {
                "kind": "struct",
                "fields": []
            }
        }
    ],
    "events": [
        {
            "name": "RequestingRandomness",
            "fields": [
                {
                    "name": "vrfClient",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "maxResult",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "timestamp",
                    "type": "i64",
                    "index": false
                }
            ]
        },
        {
            "name": "VrfClientInvoked",
            "fields": [
                {
                    "name": "vrfClient",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "timestamp",
                    "type": "i64",
                    "index": false
                }
            ]
        },
        {
            "name": "VrfClientResultUpdated",
            "fields": [
                {
                    "name": "vrfClient",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "result",
                    "type": "u128",
                    "index": false
                },
                {
                    "name": "resultBuffer",
                    "type": {
                        "array": [
                            "u8",
                            32
                        ]
                    },
                    "index": false
                },
                {
                    "name": "timestamp",
                    "type": "i64",
                    "index": false
                }
            ]
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "InvalidSwitchboardAccount",
            "msg": "Not a valid Switchboard account"
        },
        {
            "code": 6001,
            "name": "MaxResultExceedsMaximum",
            "msg": "The max result must not exceed u64"
        },
        {
            "code": 6002,
            "name": "EmptyCurrentRoundResult",
            "msg": "Current round result is empty"
        },
        {
            "code": 6003,
            "name": "InvalidAuthorityError",
            "msg": "Invalid authority account provided."
        },
        {
            "code": 6004,
            "name": "InvalidVrfAccount",
            "msg": "Invalid VRF account provided."
        },
        {
            "code": 6005,
            "name": "VrfClientCloseNotReady",
            "msg": "VRF client is not ready to be closed."
        },
        {
            "code": 6006,
            "name": "VrfCloseNotReady",
            "msg": "VRF account is not ready to be closed."
        }
    ]
};
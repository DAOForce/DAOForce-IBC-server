const example_convert_coin = {
  "jsonrpc": "2.0",
  "id": "0",
  "result": {
    "query": "convert_coin.amount\u003e0",
    "data": {
      "type": "tendermint/event/Tx",
      "value": {
        "TxResult": {
          "height": "4608273",
          "tx": "CvcCCs4BCh4vZXZtb3MuZXJjMjAudjEuTXNnQ29udmVydENvaW4SqwEKTwpEaWJjLzdGMEMyQ0I2RTc5Q0MzNkQyOURBNzU5Mjg5OUY5OEUzQkVGRDJDRjc3QTk0MzQwQzMxNzAzMkE3ODgxMjM5M0QSBzYwMDAwMDASKjB4OTRCZUQwN2RFRmQ3NEVBMUI5QzJlNzYzRjQ3NDc1NzljNTU0REVFNxosZXZtb3MxampsZHFsMDA2YTgycnd3enVhM2xnYXI0MDh6NGZoaDhyM3FwZGz6P6IBCiovZXRoZXJtaW50LnR5cGVzLnYxLkV4dGVuc2lvbk9wdGlvbnNXZWIzVHgSdAipRhIsZXZtb3MxampsZHFsMDA2YTgycnd3enVhM2xnYXI0MDh6NGZoaDhyM3FwZGwaQe0QRA+ha3FA+eimnpN0Pjrsh2BpRDFqNNzQTOJRW7FOfZJXydSjIdUo/mydHWZ/NGp+SrF9HKikZPgmcXcQ8XcbEoABClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiEDUJ8JvM8BpMkwfIY/5PzMJ8+V/S/CYX6gTKR++X6aQwMSBAoCCH8YZhIjChwKBmFldm1vcxISMjQxNDk5OTk5OTk5OTk5OTY4EKDvgAUaAA==",
          "result": {
            "data": "CiAKHi9ldm1vcy5lcmMyMC52MS5Nc2dDb252ZXJ0Q29pbg==",
            "log": "[{\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"evmos1glht96kr2rseywuvhhay894qw7ekuc4qg9z5nw\"},{\"key\":\"amount\",\"value\":\"6000000ibc/7F0C2CB6E79CC36D29DA7592899F98E3BEFD2CF77A94340C317032A78812393D\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"evmos1jjldql006a82rwwzua3lgar408z4fhh8r3qpdl\"},{\"key\":\"amount\",\"value\":\"6000000ibc/7F0C2CB6E79CC36D29DA7592899F98E3BEFD2CF77A94340C317032A78812393D\"}]},{\"type\":\"convert_coin\",\"attributes\":[{\"key\":\"sender\",\"value\":\"evmos1jjldql006a82rwwzua3lgar408z4fhh8r3qpdl\"},{\"key\":\"receiver\",\"value\":\"0x94BeD07dEFd74EA1B9C2e763F4747579c554DEE7\"},{\"key\":\"amount\",\"value\":\"6000000\"},{\"key\":\"cosmos_coin\",\"value\":\"ibc/7F0C2CB6E79CC36D29DA7592899F98E3BEFD2CF77A94340C317032A78812393D\"},{\"key\":\"erc20_token\",\"value\":\"0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/evmos.erc20.v1.MsgConvertCoin\"},{\"key\":\"sender\",\"value\":\"evmos1jjldql006a82rwwzua3lgar408z4fhh8r3qpdl\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"evmos1glht96kr2rseywuvhhay894qw7ekuc4qg9z5nw\"},{\"key\":\"sender\",\"value\":\"evmos1jjldql006a82rwwzua3lgar408z4fhh8r3qpdl\"},{\"key\":\"amount\",\"value\":\"6000000ibc/7F0C2CB6E79CC36D29DA7592899F98E3BEFD2CF77A94340C317032A78812393D\"}]}]}]",
            "gas_wanted": "10500000",
            "gas_used": "2539382",
            "events": [
              {
                "type": "coin_spent",
                "attributes": [
                  {
                    "key": "c3BlbmRlcg==",
                    "value": "ZXZtb3MxampsZHFsMDA2YTgycnd3enVhM2xnYXI0MDh6NGZoaDhyM3FwZGw=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "MjQxNDk5OTk5OTk5OTk5OTY4YWV2bW9z",
                    "index": true
                  }
                ]
              },
              {
                "type": "coin_received",
                "attributes": [
                  {
                    "key": "cmVjZWl2ZXI=",
                    "value": "ZXZtb3MxN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxqY2p3MzQ=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "MjQxNDk5OTk5OTk5OTk5OTY4YWV2bW9z",
                    "index": true
                  }
                ]
              },
              {
                "type": "transfer",
                "attributes": [
                  {
                    "key": "cmVjaXBpZW50",
                    "value": "ZXZtb3MxN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxqY2p3MzQ=",
                    "index": true
                  },
                  {
                    "key": "c2VuZGVy",
                    "value": "ZXZtb3MxampsZHFsMDA2YTgycnd3enVhM2xnYXI0MDh6NGZoaDhyM3FwZGw=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "MjQxNDk5OTk5OTk5OTk5OTY4YWV2bW9z",
                    "index": true
                  }
                ]
              },
              {
                "type": "message",
                "attributes": [
                  {
                    "key": "c2VuZGVy",
                    "value": "ZXZtb3MxampsZHFsMDA2YTgycnd3enVhM2xnYXI0MDh6NGZoaDhyM3FwZGw=",
                    "index": true
                  }
                ]
              },
              {
                "type": "tx",
                "attributes": [
                  {
                    "key": "ZmVl",
                    "value": "MjQxNDk5OTk5OTk5OTk5OTY4YWV2bW9z",
                    "index": true
                  }
                ]
              },
              {
                "type": "tx",
                "attributes": [
                  {
                    "key": "YWNjX3NlcQ==",
                    "value": "ZXZtb3MxampsZHFsMDA2YTgycnd3enVhM2xnYXI0MDh6NGZoaDhyM3FwZGwvMTAy",
                    "index": true
                  }
                ]
              },
              {
                "type": "tx",
                "attributes": [
                  {
                    "key": "c2lnbmF0dXJl",
                    "value": "",
                    "index": true
                  }
                ]
              },
              {
                "type": "message",
                "attributes": [
                  {
                    "key": "YWN0aW9u",
                    "value": "L2V2bW9zLmVyYzIwLnYxLk1zZ0NvbnZlcnRDb2lu",
                    "index": true
                  }
                ]
              },
              {
                "type": "coin_spent",
                "attributes": [
                  {
                    "key": "c3BlbmRlcg==",
                    "value": "ZXZtb3MxampsZHFsMDA2YTgycnd3enVhM2xnYXI0MDh6NGZoaDhyM3FwZGw=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "NjAwMDAwMGliYy83RjBDMkNCNkU3OUNDMzZEMjlEQTc1OTI4OTlGOThFM0JFRkQyQ0Y3N0E5NDM0MEMzMTcwMzJBNzg4MTIzOTNE",
                    "index": true
                  }
                ]
              },
              {
                "type": "coin_received",
                "attributes": [
                  {
                    "key": "cmVjZWl2ZXI=",
                    "value": "ZXZtb3MxZ2xodDk2a3IycnNleXd1dmhoYXk4OTRxdzdla3VjNHFnOXo1bnc=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "NjAwMDAwMGliYy83RjBDMkNCNkU3OUNDMzZEMjlEQTc1OTI4OTlGOThFM0JFRkQyQ0Y3N0E5NDM0MEMzMTcwMzJBNzg4MTIzOTNE",
                    "index": true
                  }
                ]
              },
              {
                "type": "transfer",
                "attributes": [
                  {
                    "key": "cmVjaXBpZW50",
                    "value": "ZXZtb3MxZ2xodDk2a3IycnNleXd1dmhoYXk4OTRxdzdla3VjNHFnOXo1bnc=",
                    "index": true
                  },
                  {
                    "key": "c2VuZGVy",
                    "value": "ZXZtb3MxampsZHFsMDA2YTgycnd3enVhM2xnYXI0MDh6NGZoaDhyM3FwZGw=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "NjAwMDAwMGliYy83RjBDMkNCNkU3OUNDMzZEMjlEQTc1OTI4OTlGOThFM0JFRkQyQ0Y3N0E5NDM0MEMzMTcwMzJBNzg4MTIzOTNE",
                    "index": true
                  }
                ]
              },
              {
                "type": "message",
                "attributes": [
                  {
                    "key": "c2VuZGVy",
                    "value": "ZXZtb3MxampsZHFsMDA2YTgycnd3enVhM2xnYXI0MDh6NGZoaDhyM3FwZGw=",
                    "index": true
                  }
                ]
              },
              {
                "type": "convert_coin",
                "attributes": [
                  {
                    "key": "c2VuZGVy",
                    "value": "ZXZtb3MxampsZHFsMDA2YTgycnd3enVhM2xnYXI0MDh6NGZoaDhyM3FwZGw=",
                    "index": true
                  },
                  {
                    "key": "cmVjZWl2ZXI=",
                    "value": "MHg5NEJlRDA3ZEVGZDc0RUExQjlDMmU3NjNGNDc0NzU3OWM1NTRERUU3",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "NjAwMDAwMA==",
                    "index": true
                  },
                  {
                    "key": "Y29zbW9zX2NvaW4=",
                    "value": "aWJjLzdGMEMyQ0I2RTc5Q0MzNkQyOURBNzU5Mjg5OUY5OEUzQkVGRDJDRjc3QTk0MzQwQzMxNzAzMkE3ODgxMjM5M0Q=",
                    "index": true
                  },
                  {
                    "key": "ZXJjMjBfdG9rZW4=",
                    "value": "MHg4MGI1YTMyRTRGMDMyQjJhMDU4YjRGMjlFQzk1RUVmRUVCODdhRGNk",
                    "index": true
                  }
                ]
              }
            ]
          }
        }
      }
    },
    "events": {
      "convert_coin.receiver": [
        "0x94BeD07dEFd74EA1B9C2e763F4747579c554DEE7"
      ],
      "convert_coin.erc20_token": [
        "0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd"
      ],
      "tm.event": [
        "Tx"
      ],
      "tx.hash": [
        "8E5328D5D39D28D8AE3A7DCE5ABE6C03AB5368B13BD36D354EABF37313961C88"
      ],
      "coin_received.receiver": [
        "evmos17xpfvakm2amg962yls6f84z3kell8c5ljcjw34",
        "evmos1glht96kr2rseywuvhhay894qw7ekuc4qg9z5nw"  // ERC 20 module account
      ],
      "transfer.amount": [
        "241499999999999968aevmos",
        "6000000ibc/7F0C2CB6E79CC36D29DA7592899F98E3BEFD2CF77A94340C317032A78812393D"
      ],
      "convert_coin.sender": [
        "evmos1jjldql006a82rwwzua3lgar408z4fhh8r3qpdl"
      ],
      "tx.acc_seq": [
        "evmos1jjldql006a82rwwzua3lgar408z4fhh8r3qpdl/102"
      ],
      "coin_spent.amount": [
        "241499999999999968aevmos",
        "6000000ibc/7F0C2CB6E79CC36D29DA7592899F98E3BEFD2CF77A94340C317032A78812393D"
      ],
      "coin_received.amount": [
        "241499999999999968aevmos",
        "6000000ibc/7F0C2CB6E79CC36D29DA7592899F98E3BEFD2CF77A94340C317032A78812393D"
      ],
      "transfer.sender": [
        "evmos1jjldql006a82rwwzua3lgar408z4fhh8r3qpdl",
        "evmos1jjldql006a82rwwzua3lgar408z4fhh8r3qpdl"
      ],
      "tx.fee": [
        "241499999999999968aevmos"
      ],
      "tx.signature": [
        ""
      ],
      "message.action": [
        "/evmos.erc20.v1.MsgConvertCoin"
      ],
      "convert_coin.amount": [
        "6000000"
      ],
      "convert_coin.cosmos_coin": [
        "ibc/7F0C2CB6E79CC36D29DA7592899F98E3BEFD2CF77A94340C317032A78812393D"
      ],
      "coin_spent.spender": [
        "evmos1jjldql006a82rwwzua3lgar408z4fhh8r3qpdl",
        "evmos1jjldql006a82rwwzua3lgar408z4fhh8r3qpdl"
      ],
      "transfer.recipient": [
        "evmos17xpfvakm2amg962yls6f84z3kell8c5ljcjw34",
        "evmos1glht96kr2rseywuvhhay894qw7ekuc4qg9z5nw"  // ERC 20 module account
      ],
      "message.sender": [
        "evmos1jjldql006a82rwwzua3lgar408z4fhh8r3qpdl",
        "evmos1jjldql006a82rwwzua3lgar408z4fhh8r3qpdl"
      ],
      "tx.height": [
        "4608273"
      ]
    }
  }
};

const example_convert_erc20 = {
  "jsonrpc": "2.0",
  "id": "0",
  "result": {
    "query": "convert_erc20.amount\u003e0",
    "data": {
      "type": "tendermint/event/Tx",
      "value": {
        "TxResult": {
          "height": "4608459",
          "tx": "CuYCCr0BCh8vZXZtb3MuZXJjMjAudjEuTXNnQ29udmVydEVSQzIwEpkBCioweGMwMzM0NTQ0ODk2OURkOEMwMGU5RTRBODVkMmQ5NzIyZDA5M2FGOEUSETcyMDU4NDc3NTUxODY0MTYwGixldm1vczEwMjV1bnB3bmhkcmd3Nm5zeTNjcXU0YWdlY3BqYWFxc2E3cnR3biIqMHg3YWE5Qzk4NUQzYmI0Njg3NkE3MDI0NzAwRTU3YThjZTAzMmVGNDEw+j+iAQoqL2V0aGVybWludC50eXBlcy52MS5FeHRlbnNpb25PcHRpb25zV2ViM1R4EnQIqUYSLGV2bW9zMTAyNXVucHduaGRyZ3c2bnN5M2NxdTRhZ2VjcGphYXFzYTdydHduGkEPA9LKQzR7rye3PzztprudxrJ2eSlY4rZ+W+bjQB0KvAz6bfp1OdI9pS2JAq/LH2pyyD3RSERFEbV8wPepuzgnHBKBAQpaCk8KKC9ldGhlcm1pbnQuY3J5cHRvLnYxLmV0aHNlY3AyNTZrMS5QdWJLZXkSIwohA21N+XCEz4J/MFmM8nWA68/nFmU4iziZXxICvE2QC9JFEgQKAgh/GJUBEiMKHAoGYWV2bW9zEhIyNDE0OTk5OTk5OTk5OTk5NjgQoO+ABRoA",
          "result": {
            "data": "CiEKHy9ldm1vcy5lcmMyMC52MS5Nc2dDb252ZXJ0RVJDMjA=",
            "log": "[{\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"evmos1025unpwnhdrgw6nsy3cqu4agecpjaaqsa7rtwn\"},{\"key\":\"amount\",\"value\":\"72058477551864160ibc/6B3FCE336C3465D3B72F7EFB4EB92FC521BC480FE9653F627A0BD0237DF213F3\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"evmos1glht96kr2rseywuvhhay894qw7ekuc4qg9z5nw\"},{\"key\":\"amount\",\"value\":\"72058477551864160ibc/6B3FCE336C3465D3B72F7EFB4EB92FC521BC480FE9653F627A0BD0237DF213F3\"}]},{\"type\":\"convert_erc20\",\"attributes\":[{\"key\":\"sender\",\"value\":\"0x7aa9C985D3bb46876A7024700E57a8ce032eF410\"},{\"key\":\"receiver\",\"value\":\"evmos1025unpwnhdrgw6nsy3cqu4agecpjaaqsa7rtwn\"},{\"key\":\"amount\",\"value\":\"72058477551864160\"},{\"key\":\"cosmos_coin\",\"value\":\"ibc/6B3FCE336C3465D3B72F7EFB4EB92FC521BC480FE9653F627A0BD0237DF213F3\"},{\"key\":\"erc20_token\",\"value\":\"0xc03345448969Dd8C00e9E4A85d2d9722d093aF8E\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/evmos.erc20.v1.MsgConvertERC20\"},{\"key\":\"sender\",\"value\":\"evmos1glht96kr2rseywuvhhay894qw7ekuc4qg9z5nw\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"evmos1025unpwnhdrgw6nsy3cqu4agecpjaaqsa7rtwn\"},{\"key\":\"sender\",\"value\":\"evmos1glht96kr2rseywuvhhay894qw7ekuc4qg9z5nw\"},{\"key\":\"amount\",\"value\":\"72058477551864160ibc/6B3FCE336C3465D3B72F7EFB4EB92FC521BC480FE9653F627A0BD0237DF213F3\"}]}]}]",
            "gas_wanted": "10500000",
            "gas_used": "2549367",
            "events": [
              {
                "type": "coin_spent",
                "attributes": [
                  {
                    "key": "c3BlbmRlcg==",
                    "value": "ZXZtb3MxMDI1dW5wd25oZHJndzZuc3kzY3F1NGFnZWNwamFhcXNhN3J0d24=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "MjQxNDk5OTk5OTk5OTk5OTY4YWV2bW9z",
                    "index": true
                  }
                ]
              },
              {
                "type": "coin_received",
                "attributes": [
                  {
                    "key": "cmVjZWl2ZXI=",
                    "value": "ZXZtb3MxN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxqY2p3MzQ=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "MjQxNDk5OTk5OTk5OTk5OTY4YWV2bW9z",
                    "index": true
                  }
                ]
              },
              {
                "type": "transfer",
                "attributes": [
                  {
                    "key": "cmVjaXBpZW50",
                    "value": "ZXZtb3MxN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxqY2p3MzQ=",
                    "index": true
                  },
                  {
                    "key": "c2VuZGVy",
                    "value": "ZXZtb3MxMDI1dW5wd25oZHJndzZuc3kzY3F1NGFnZWNwamFhcXNhN3J0d24=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "MjQxNDk5OTk5OTk5OTk5OTY4YWV2bW9z",
                    "index": true
                  }
                ]
              },
              {
                "type": "message",
                "attributes": [
                  {
                    "key": "c2VuZGVy",
                    "value": "ZXZtb3MxMDI1dW5wd25oZHJndzZuc3kzY3F1NGFnZWNwamFhcXNhN3J0d24=",
                    "index": true
                  }
                ]
              },
              {
                "type": "tx",
                "attributes": [
                  {
                    "key": "ZmVl",
                    "value": "MjQxNDk5OTk5OTk5OTk5OTY4YWV2bW9z",
                    "index": true
                  }
                ]
              },
              {
                "type": "tx",
                "attributes": [
                  {
                    "key": "YWNjX3NlcQ==",
                    "value": "ZXZtb3MxMDI1dW5wd25oZHJndzZuc3kzY3F1NGFnZWNwamFhcXNhN3J0d24vMTQ5",
                    "index": true
                  }
                ]
              },
              {
                "type": "tx",
                "attributes": [
                  {
                    "key": "c2lnbmF0dXJl",
                    "value": "",
                    "index": true
                  }
                ]
              },
              {
                "type": "message",
                "attributes": [
                  {
                    "key": "YWN0aW9u",
                    "value": "L2V2bW9zLmVyYzIwLnYxLk1zZ0NvbnZlcnRFUkMyMA==",
                    "index": true
                  }
                ]
              },
              {
                "type": "coin_spent",
                "attributes": [
                  {
                    "key": "c3BlbmRlcg==",
                    "value": "ZXZtb3MxZ2xodDk2a3IycnNleXd1dmhoYXk4OTRxdzdla3VjNHFnOXo1bnc=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "NzIwNTg0Nzc1NTE4NjQxNjBpYmMvNkIzRkNFMzM2QzM0NjVEM0I3MkY3RUZCNEVCOTJGQzUyMUJDNDgwRkU5NjUzRjYyN0EwQkQwMjM3REYyMTNGMw==",
                    "index": true
                  }
                ]
              },
              {
                "type": "coin_received",
                "attributes": [
                  {
                    "key": "cmVjZWl2ZXI=",
                    "value": "ZXZtb3MxMDI1dW5wd25oZHJndzZuc3kzY3F1NGFnZWNwamFhcXNhN3J0d24=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "NzIwNTg0Nzc1NTE4NjQxNjBpYmMvNkIzRkNFMzM2QzM0NjVEM0I3MkY3RUZCNEVCOTJGQzUyMUJDNDgwRkU5NjUzRjYyN0EwQkQwMjM3REYyMTNGMw==",
                    "index": true
                  }
                ]
              },
              {
                "type": "transfer",
                "attributes": [
                  {
                    "key": "cmVjaXBpZW50",
                    "value": "ZXZtb3MxMDI1dW5wd25oZHJndzZuc3kzY3F1NGFnZWNwamFhcXNhN3J0d24=",
                    "index": true
                  },
                  {
                    "key": "c2VuZGVy",
                    "value": "ZXZtb3MxZ2xodDk2a3IycnNleXd1dmhoYXk4OTRxdzdla3VjNHFnOXo1bnc=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "NzIwNTg0Nzc1NTE4NjQxNjBpYmMvNkIzRkNFMzM2QzM0NjVEM0I3MkY3RUZCNEVCOTJGQzUyMUJDNDgwRkU5NjUzRjYyN0EwQkQwMjM3REYyMTNGMw==",
                    "index": true
                  }
                ]
              },
              {
                "type": "message",
                "attributes": [
                  {
                    "key": "c2VuZGVy",
                    "value": "ZXZtb3MxZ2xodDk2a3IycnNleXd1dmhoYXk4OTRxdzdla3VjNHFnOXo1bnc=",
                    "index": true
                  }
                ]
              },
              {
                "type": "convert_erc20",
                "attributes": [
                  {
                    "key": "c2VuZGVy",
                    "value": "MHg3YWE5Qzk4NUQzYmI0Njg3NkE3MDI0NzAwRTU3YThjZTAzMmVGNDEw",
                    "index": true
                  },
                  {
                    "key": "cmVjZWl2ZXI=",
                    "value": "ZXZtb3MxMDI1dW5wd25oZHJndzZuc3kzY3F1NGFnZWNwamFhcXNhN3J0d24=",
                    "index": true
                  },
                  {
                    "key": "YW1vdW50",
                    "value": "NzIwNTg0Nzc1NTE4NjQxNjA=",
                    "index": true
                  },
                  {
                    "key": "Y29zbW9zX2NvaW4=",
                    "value": "aWJjLzZCM0ZDRTMzNkMzNDY1RDNCNzJGN0VGQjRFQjkyRkM1MjFCQzQ4MEZFOTY1M0Y2MjdBMEJEMDIzN0RGMjEzRjM=",
                    "index": true
                  },
                  {
                    "key": "ZXJjMjBfdG9rZW4=",
                    "value": "MHhjMDMzNDU0NDg5NjlEZDhDMDBlOUU0QTg1ZDJkOTcyMmQwOTNhRjhF",
                    "index": true
                  }
                ]
              }
            ]
          }
        }
      }
    },
    "events": {
      "transfer.amount": [
        "241499999999999968aevmos",
        "72058477551864160ibc/6B3FCE336C3465D3B72F7EFB4EB92FC521BC480FE9653F627A0BD0237DF213F3"
      ],
      "convert_erc20.amount": [
        "72058477551864160"
      ],
      "convert_erc20.cosmos_coin": [
        "ibc/6B3FCE336C3465D3B72F7EFB4EB92FC521BC480FE9653F627A0BD0237DF213F3"
      ],
      "convert_erc20.erc20_token": [
        "0xc03345448969Dd8C00e9E4A85d2d9722d093aF8E"
      ],
      "tx.hash": [
        "644689A83A2DF17D5CB7FC29E392A34DBC58185B2A8A5F69DAF5C457080F188A"
      ],
      "coin_spent.amount": [
        "241499999999999968aevmos",
        "72058477551864160ibc/6B3FCE336C3465D3B72F7EFB4EB92FC521BC480FE9653F627A0BD0237DF213F3"
      ],
      "coin_received.amount": [
        "241499999999999968aevmos",
        "72058477551864160ibc/6B3FCE336C3465D3B72F7EFB4EB92FC521BC480FE9653F627A0BD0237DF213F3"
      ],
      "message.sender": [
        "evmos1025unpwnhdrgw6nsy3cqu4agecpjaaqsa7rtwn",
        "evmos1glht96kr2rseywuvhhay894qw7ekuc4qg9z5nw"  // ERC 20 module account
      ],
      "tx.fee": [
        "241499999999999968aevmos"
      ],
      "tx.acc_seq": [
        "evmos1025unpwnhdrgw6nsy3cqu4agecpjaaqsa7rtwn/149"
      ],
      "coin_spent.spender": [
        "evmos1025unpwnhdrgw6nsy3cqu4agecpjaaqsa7rtwn",
        "evmos1glht96kr2rseywuvhhay894qw7ekuc4qg9z5nw"  // ERC 20 module account
      ],
      "transfer.recipient": [
        "evmos17xpfvakm2amg962yls6f84z3kell8c5ljcjw34",
        "evmos1025unpwnhdrgw6nsy3cqu4agecpjaaqsa7rtwn"
      ],
      "transfer.sender": [
        "evmos1025unpwnhdrgw6nsy3cqu4agecpjaaqsa7rtwn",
        "evmos1glht96kr2rseywuvhhay894qw7ekuc4qg9z5nw"  // ERC Module Account
      ],
      "tx.signature": [
        ""
      ],
      "message.action": [
        "/evmos.erc20.v1.MsgConvertERC20"
      ],
      "convert_erc20.receiver": [
        "evmos1025unpwnhdrgw6nsy3cqu4agecpjaaqsa7rtwn"
      ],
      "coin_received.receiver": [
        "evmos17xpfvakm2amg962yls6f84z3kell8c5ljcjw34",
        "evmos1025unpwnhdrgw6nsy3cqu4agecpjaaqsa7rtwn"
      ],
      "convert_erc20.sender": [
        "0x7aa9C985D3bb46876A7024700E57a8ce032eF410"
      ],
      "tm.event": [
        "Tx"
      ],
      "tx.height": [
        "4608459"
      ]
    }
  }
};

export {example_convert_coin, example_convert_erc20};
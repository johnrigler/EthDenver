pragma solidity ^0.8.18;

// SPDX-License-Identifier: GPL-3.0-or-later

contract easyBase  {

/* Copyright John Rigler 2023 */
/* john@rigler.org */

mapping(address => string) public payload;


function mapPayload (
     string memory body
)  public 
     { 
            payload[msg.sender] = body;
    }
}

# Invitation: build a dartboard that reports its own games

Draft for Albuquerque colleges, hackerspaces, and makerspaces. Prepared 2026-10-07. Proposed collaborators and venues have not committed; this is material for outreach and project coordination.

We are inviting students, electronics builders, programmers, radio experimenters, and fabrication teams to help build an electronic soft-tip dartboard that reports its own game events through Chisel.

The board will have its own public identity and a reporting key within its electronics. It will register target hits, maintain the local game, and sign records that other people can inspect. A Chisel publisher will put completed-game artifacts, or references to retained artifacts, onto a public ledger.

The proposed public demonstration connects a Denver bar with the ETHDenver hacker floor during the next event week. John Rigler plans to spend up to one week there, moving between the two locations and involving both visiting builders and Denver regulars. Nob Hill Inn is the proposed bar because early versions of these ideas were discussed with people there. Venue participation and event arrangements still need to be established.

An optional LoRa radio link would carry signed reports from the bar to a receiver at the convention. Participants at both locations could watch the same game and inspect the same signed history. Albuquerque teams can build and test the equipment beforehand, and can join remotely if travel is impractical.

A dedicated **Nob Hill Darts** page will be the public spectator interface, optimized for this board and its games. Anyone, anywhere can follow the game and revisit recorded results without creating an account or connecting a wallet. The page will share Chisel/Mogwai's record-reading and verification machinery. A spectator who wants to sign or write a contribution can deliberately open Chisel with the current board/game context.

## Ways to participate

- Identify, donate, or lend a suitable electronic soft-tip dartboard and help document its input interface.
- Read target contacts, handle debounce, and implement or verify the scoring rules.
- Build an enclosure and accessible wiring, with durable labels and a QR entry point.
- Enroll a reporting key and build an independent signature verifier.
- Test radio transmission and recovery from missing or repeated packets.
- Build a vanilla-JavaScript viewer distributable on IPFS and connect publication/retrieval to Chisel.
- Play test games and compare the physical throws with what the device reports.

Teams can take one piece and publish its documentation, code, and test observations in this repository. A first local session should aim to record a real game, sign its result, and retrieve the artifact independently. Radio work can follow that working demonstration.

This offers a small, inspectable project across electronics, embedded programming, cryptography, networking, fabrication, and public interaction. Arcade games and pinball machines could later use the same model of an identifiable physical object producing its own signed history.

A device signature gives evidence about the source of a report. Sensor accuracy, scoring logic, physical access, and firmware integrity remain things the team must inspect and test. Making those assumptions visible is part of the build.

Potential starting points include [CNM/FUSE Makerspace](https://www.cnm.edu/locations/fuse-makerspace), [Quelab](https://quelab.net/), and interested [UNM makerspace and engineering/computing participants](https://it.unm.edu/academic-tech/it-makerspace.html). These names identify possible contacts, not endorsements or partnerships.

## Coordination

Project coordinator: John Rigler.

Use [johnrigler/EthDenver issues](https://github.com/johnrigler/EthDenver/issues) to offer a board, a build-session venue, an area of expertise, or a small team. Include what is available and what part you want to work on.

Read the [technical and event plan](nob-hill-dartboard-pilot.md) for device identity, publication, radio options, build milestones, and the proposed bar-to-convention demonstration.

# Nob Hill Darts: project-manager pitch

A Nerd Coffee LLC project. Project manager: Shannon. Chisel development and Denver outreach: John Rigler. Updated 7 October 2026. This is the content and speaking outline for the accompanying PowerPoint, prepared for Shannon to coordinate a small hardware/web build and an independently organized ETHDenver outside event.

The proposal asks for a bounded prototype and named owners. It does not assume a committed venue, partner, budget, event date, or implementation. Concept artwork in the PowerPoint illustrates the proposed object and workbench rather than actual project work.

## 1. Nob Hill Darts

**On the slide:** A dartboard that reports its own games through Chisel. Nerd Coffee LLC. Project manager: Shannon. October 2026.

**Speaking notes:** Start with the ordinary game. Plastic-tipped darts hit an electronic board. The board keeps its own identity and signs its results. A focused public page lets people watch and return to the record. Nerd Coffee LLC organizes the project. Shannon manages the build, while John contributes Chisel development and Denver outreach. The first request is help organizing one working prototype.

## 2. A shared game in Denver

**On the slide:** Denver regulars play at the bar. Visiting builders join from the hacker floor. Albuquerque teams build and test beforehand. Spectators anywhere follow the same game. John can commit up to one week in Denver.

**Speaking notes:** Nob Hill Inn is the proposed bar because early Chisel ideas were discussed with people there. John moves between the hacker floor and the bar to involve participants. The shared game connects an existing Denver community with visiting builders. Venue and convention-floor participation still need arrangements. Global viewers see the same reports as their connections allow, without a promise of simultaneous arrival.

## 3. Nob Hill Darts is the public page

**On the slide:** Current game and player aliases. Scores and recent throws. Earlier games from the same board. Clear freshness and record status. Anyone can watch without a wallet or account. Optional writing opens Chisel with the game context.

**Speaking notes:** This is a focused portal client over the Chisel/Mogwai record model. Keep public reading separate from deliberate human signing and writing. The team must inspect the existing code and extract reusable reading/verification helpers. The static page can live on IPFS while a separate public read feed supplies changing game events.

## 4. The board has its own identity

**On the slide:** Board and controller read hits and sign reports. A relay preserves signatures and publishes through Chisel. Retained artifacts and ledger references support later retrieval. Nob Hill Darts reads the live feed and game history. A signature authenticates a report's source. Testing establishes confidence in the score.

**Speaking notes:** The board is a first-class participant with enrollment, calibration, firmware, repair, and key-replacement history. Its reporting key is distinct from a publisher's funded chain key unless the hardware supports the required chain algorithm. A secure element limits key extraction but does not prove that a physical dart caused a score. Inspect sensors, scoring logic, firmware, and physical access. Preserve original signed bytes across relays.

## 5. The first prototype

**On the slide:** One board. One game format. One signed completed-game artifact. One public viewer. Baseline USB, Ethernet, or Wi-Fi. LoRa follows a working prototype.

**Speaking notes:** Select the board and scoring rules first. Use a Pi or controller with a recoverable local log. Publish the completed-game artifact through Chisel, directly if supported or by a retained IPFS reference. A live feed can show throws before confirmation. Add stable event IDs, reconnection, and duplicate suppression. LoRa, Zigbee, more boards, and per-dart ledger transactions remain extensions.

## 6. Nerd Coffee LLC project team

**On the slide:** Shannon, project manager: scope, task owners, schedule, and coordination. John Rigler: Chisel development and Denver outreach. Build contributors: hardware, scoring, signatures, and the public page. Venue hosts: access, operating arrangements, and local follow-up. Potential starting points: CNM/FUSE, Quelab, and interested UNM participants.

**Speaking notes:** Shannon manages the project under Nerd Coffee LLC. John contributes the Chisel work and the Denver demonstration. Shannon assigns owners for electronics, embedded scoring, signature verification, publication, and the public page. Roles can overlap. Start with available equipment and a build session. Colleges and makerspaces get a tangible project that spans electronics and software. Named organizations are potential collaborators, not confirmed partners. Invite teams only after Shannon agrees on the first session and project scope.

## 7. Milestone gates

**On the slide:** Board selected and inputs understood. Real game logged and independently verified. Chisel publication and public viewing work. Rehearsal demonstrates interruption recovery. Hosts and event arrangements support the Denver session. Local participants can run a follow-up session.

**Speaking notes:** Task 1 is the README and pitch. Advance by evidence rather than an invented calendar. Shannon names owners and schedules each gate after inventory. Add radio work once the baseline path works. Keep the original project tracking issue open for implementation.

## 8. Acceptance demonstration

**On the slide:** Observed play matches the score. Altered reports fail verification. Replayed events do not change the score. The log survives reboot and reconnect. Anyone can watch without a wallet. A finished game remains retrievable after the live display closes.

**Speaking notes:** Record misses and corrections explicitly. A contact matrix does not detect every missed throw. Show live reception, verified signatures, and ledger confirmation separately. Keep artifact bytes available with a retention plan. Use at least one independent device to verify and retrieve the recorded game.

## 9. Event operations and optional radio

**On the slide:** Proposed bar and hacker-floor display need host agreements. Confirm dates before invitations. John shuttles between locations during his week. Preserve the baseline connection. LoRa needs measurement at the actual sites. Plan equipment custody and a local follow-up.

**Speaking notes:** This is an independently organized outside event. We are not claiming an official ETHDenver session or venue endorsement. If radio adds value, select a direct LoRa link or a specifically arranged LoRaWAN deployment with the required gateway, servers, and backhaul. Budget and payload testing follow that choice. The pilot should still function if radio fails.

## 10. Nerd Coffee LLC next steps

**On the slide:** One working prototype. Shannon coordinates the build and task owners. Inventory one board and controller plus input electronics, power, enclosure, and test access. Agree the parts budget after inventory. Review a game verified on an independent device.

**Speaking notes:** Shannon makes the first build concrete for Nerd Coffee LLC, starting with equipment inventory, named task owners, and a build session. John contributes Chisel development and up to one week in Denver. The requested next step is coordination of the prototype, with event commitments later. No spending estimate or deadline is asserted before choosing equipment and checking availability. The README and issue #1 hold the working plan.

## Source material

- [Project README](../README.md)
- [Technical pilot and references](nob-hill-dartboard-pilot.md)
- [College/makerspace invitation draft](college-makerspace-invitation.md)
- [Implementation issue #1](https://github.com/johnrigler/EthDenver/issues/1)

Technical source links in the PowerPoint notes include [RFC 9334](https://www.rfc-editor.org/rfc/rfc9334.html), [RFC 8785](https://www.rfc-editor.org/rfc/rfc8785.html), and [The Things Network LoRaWAN architecture](https://www.thethingsnetwork.org/docs/lorawan/architecture/). Candidate collaborator links identify starting points for outreach.

/**
 * MIT License

Copyright (c) 2017 deepakshajan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

var options = {
				   solution: 			[[null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	 'G',	 'I',	 'T',	 'H',	 'U',    'B',   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	 'W',	 'A',	 'L',    'L',    'E',    'T',   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	 'D',    'O',    'G',    'E',   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	 'S',	 'M',	 'A',	 'R',	 'T',    'C',    'O',    'N',    'T',    'R',    'A',    'C',    'T',   null,   null,   null],
		                                [null,	null,	 'P',	 'R',	 'I',	 'V',	 'A',	 'T',	 'E',    'K',    'E',    'Y',   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	 'B',	 'I',	 'T',    'C',    'O',    'I',    'N',   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	 'E',	 'T',    'H',    'E',    'R',    'E',    'U',    'M',   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	 'S',    'A',    'N',    'D',    'B',    'O',    'X',   null,   null,   null,   null,   null],
		                                [null,	 'T',	 'R',	 'A',	 'N',	 'S',	 'A',	 'C',	 'T',    'I',    'O',    'N',   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	 'M',    'N',    'E',    'M',    'O',    'N',    'I',    'C',    'S',   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],


		            index: 				[[null,  null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,      1,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,      2,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,      3,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,      4,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,      5,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,      6,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,      7,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,      8,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,      9,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,     10,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],

		         questions_across: [	"1. A web-based platform that provides version control using Git, enabling collaboration among developers for code hosting, project management, and facilitating open-source contributions.",
										"2. A software or hardware tool used to securely store, manage, and interact with cryptocurrencies",
										"3. A cryptocurrency that originated as a meme, featuring the Shiba Inu dog",
										"4. A a digital agreement that automatically executes and enforces its terms using code on blockchain",
										"5. A secret cryptographic code that grants exclusive access to digital assets in a cryptocurrency wallet",
										"6. The first decentralized digital currency",
										"7. The second biggest cryptocurrency",
										"8. The virtual environment where developers can test and experiment with blockchain-related projects, smart contracts, and decentralized applications (dApps) without risking real assets or impacting the main network",
										"9. The transfer of digital assets or data from one party to another on a blockchain network",
										"10. A set of words used to remember a complex piece of information"],

		        //  questions_down: [		 "2. This animal has a long trunk",
		        //                          "4. This animal likes to eat carrots and sugar cuubes",
		        //                          "5. This animal loves bananas",
		        //                          "7. Some say this anmal has nine lives",
		        //                          "10. Has big ears and likes to hop",
		        //                          "11. King of the jungle"]
				 questions_down: []

	};


		cwp_nmsp.activateCWP(document.getElementById("myPuzzle"),false,options);
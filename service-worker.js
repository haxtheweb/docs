/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [
    [
        "pages\/item-8a5bf844-d498-4f75-bf96-110eaedb42d9\/index.html",
        "wq5LDpNScJFX2xh1WZ3w"
    ],
    [
        "pages\/item-4550bc1f-bef7-4891-85f0-58647624a26b\/index.html",
        "5DcFwy1rTZGvXKgIOqMlw"
    ],
    [
        "pages\/item-06108b56-48b5-4c50-b262-81659edc750e\/index.html",
        "QREJXedlmbIMOT1okL5rw"
    ],
    [
        "pages\/item-f424af2a-f6a2-46fb-b052-ef69836a1e2e\/index.html",
        "18SYXDUvP4rqZvKykOhGpg"
    ],
    [
        "pages\/item-d131e688-d93c-4cbc-b32d-f0d052aeb8d0\/index.html",
        "35WwfKWOxPmZB4ByNiFKQ"
    ],
    [
        "pages\/item-d673110e-8d91-4294-b80f-74a38cf51533\/index.html",
        "5myoz0Im6Y7FYhuGUf1Lw"
    ],
    [
        "pages\/item-68ecb822-ae89-466a-bce2-20b33332451a\/index.html",
        "FS8xGuZiuUhjECvakMMg"
    ],
    [
        "pages\/item-a13f6fde-9c55-4a1c-bd64-cf8498be649d\/index.html",
        "pItJidmmCwSRZyEOryBlg"
    ],
    [
        "pages\/item-d345a07f-c3ee-4d20-909f-ec7293bd83b3\/index.html",
        "eD8at0YesQwzQ7ayoCWxuQ"
    ],
    [
        "pages\/item-f826380c-963c-49ff-a558-9337edbc6245\/index.html",
        "HzTbZFKTRDx5tBOgT3l2w"
    ],
    [
        "pages\/item-86b505f8-dc95-4b86-8fdd-5104ecc4f02b\/index.html",
        "69IL5DrVZywFYp9NDlyeA"
    ],
    [
        "pages\/item-6cf36319-fe20-4a72-9cb3-97e44e80f8b9\/index.html",
        "F0VCFizNV7f9O7Z6QcVg"
    ],
    [
        "pages\/item-52613cf2-1d34-47ed-9a53-dcc1d84dd5f4\/index.html",
        "yykVGJFUbjEQUzfxWAhRyw"
    ],
    [
        "pages\/item-ce9cfcf5-e94f-4fc7-bdce-bda88e477a7f\/index.html",
        "oDGlgqNRFKt878J5esQFw"
    ],
    [
        "pages\/item-873f7ad0-8fdd-4c51-81e0-e8f55ea612a5\/index.html",
        "6lssMx439meMSUcPfM6g"
    ],
    [
        "pages\/item-bfe943ba-4746-494a-b184-932c63b60909\/index.html",
        "511IcdwKKBE27fcjw5Q"
    ],
    [
        "pages\/item-012ec894-f7a5-4d12-b0e5-f8e131d7c2b8\/index.html",
        "bQvFDe0w6RAFQYhUsbviw"
    ],
    [
        "pages\/item-edcd6f86-05b5-43a9-8766-8a56709451c8\/index.html",
        "GFcOWnMdwDXHSTiVShLLw"
    ],
    [
        "pages\/item-d64f8a31-bd4c-499d-a0e0-e97ad1c9d1cb\/index.html",
        "Is560nyiw37pEwn9BfWcw"
    ],
    [
        "pages\/item-ed0d786a-105e-46ac-b848-49073917809b\/index.html",
        "pd6RapsdRDp3eRTNZGww"
    ],
    [
        "pages\/item-8991f223-d78f-42c3-a5f4-da79658ad80e\/index.html",
        "txJNbVTsNy8xkl8WocqFA"
    ],
    [
        "pages\/item-4b62f800-7fb9-4a42-b28a-eacefa7bb53c\/index.html",
        "BXH1wYmDBQQ22SzzBtw"
    ],
    [
        "pages\/item-62df18a5-fe1c-416e-9429-8d3288e7afa7\/index.html",
        "NaTAXjMjjTRIHub3Xvgg"
    ],
    [
        "pages\/item-0842ac8e-9e65-4715-be25-e3ef4c0baf8b\/index.html",
        "xryEqo2pLCvupZjNTia39Q"
    ],
    [
        "pages\/item-6ecf99f9-5623-4892-a651-9472ec0c74a5\/index.html",
        "6xoTP3PyeC7EHc0W3CUfg"
    ],
    [
        "pages\/item-d090faf0-5374-4039-8aee-c6dad760c5e1\/index.html",
        "2K6xOXvFBVKOkn12AdO2VQ"
    ],
    [
        "pages\/item-de9dbbb5-949b-49c0-95ad-dbbc84835db0\/index.html",
        "pAM78z7fBrdRC8O7cq2hhA"
    ],
    [
        "pages\/item-4c29eaf9-75db-4e33-8cd3-de1f4d64d6ca\/index.html",
        "qVmnqHOiiSdrFnEG4UWwyg"
    ],
    [
        "pages\/item-d7a7736b-3262-4d0e-8df7-a9af7823a2b7\/index.html",
        "ibbKGPLsilIuYU2HN9DEUQ"
    ],
    [
        "pages\/item-0ae1c6fb-3f57-4917-8caa-91853eda4982\/index.html",
        "gbCBnN95MaNOHkZVz0nyLQ"
    ],
    [
        "pages\/item-73d866cd-ebd0-4124-ad99-b1b18455327d\/index.html",
        "b6eE53Jumur6nlTYZENCuA"
    ],
    [
        "pages\/item-c47bf439-54fa-4c41-8f39-a72dc0d40b60\/index.html",
        "Jb9WzWh4Q77dONsuijxmBQ"
    ],
    [
        "pages\/item-a1b1587a-b40a-463f-ad4a-e5a05a98fd8c\/index.html",
        "G5V6igFZEqP5kQXBMvGl4A"
    ],
    [
        "pages\/item-8dfd19ae-77ec-4737-9981-72e4d5880cb9\/index.html",
        "Y9fdLxZ2zoLd7C2wAih1qw"
    ],
    [
        "pages\/item-af6cc6b8-3436-48fd-89c5-987cf0fa1e0b\/index.html",
        "DGBpcAdvHvJdBNpVki9Q"
    ],
    [
        "pages\/item-6516e05a-35ca-4e30-94c9-da8f32ed7ac8\/index.html",
        "j66ctaVrbdcm581RjB3xZg"
    ],
    [
        "pages\/item-7d7e9a33-1d6a-4b29-a442-35cef09ee666\/index.html",
        "t9vOVBUU8oK7UeNavnEQ"
    ],
    [
        "pages\/item-5931cf01-9b8d-4bdd-990b-6f4465174dcf\/index.html",
        "fp6g8NztSr1cJq9gDwVoA"
    ],
    [
        "pages\/item-3938a1cf-d097-473e-8e27-47d34c2e8e4b\/index.html",
        "GZCmQMCMe5hFSbJwmUpCQ"
    ],
    [
        "pages\/item-82db2727-136d-4ee0-b965-9d847d8631c6\/index.html",
        "iPsbVgXRkfxPLW4LjC9Q"
    ],
    [
        "pages\/item-7c4e5edc-892b-4272-8513-248dd4d4efe5\/index.html",
        "5vIizD1AhDy8l4dgzLCDqw"
    ],
    [
        "pages\/item-3c4f0dbd-ef6a-4c8d-acaa-27b295243948\/index.html",
        "vmX2ExxzbNZvgdrRbXBTQQ"
    ],
    [
        "pages\/item-a92e0dfc-e26f-4a7c-aa1d-f0d977b27d8f\/index.html",
        "uUNdkfisg47ncEocdUXo2w"
    ],
    [
        "pages\/item-4622057f-76f3-40dd-962b-0b6e640e4058\/index.html",
        "8ki9hzzRyKXS5Ne0M6JWOw"
    ],
    [
        "pages\/item-c7a62f87-28f5-4049-95ce-10b1ddb94201\/index.html",
        "EooCScNyUAcQEVgUo9sUEA"
    ],
    [
        "pages\/item-ca708b68-1af2-47b5-83d9-7cb94b42da91\/index.html",
        "GhSXf740oY7ZiYkw8LN4Q"
    ],
    [
        "pages\/item-526ae84e-2f82-4007-a443-7dbe1115571c\/index.html",
        "1jr6OXqO0O9HKUSeRDwIw"
    ],
    [
        "pages\/item-f74ecc94-2b62-44c7-bb23-820e3d0cf9f3\/index.html",
        "Ok2ZteyBOvHSRTRkkGZKMw"
    ],
    [
        "pages\/item-99c45cf5-0c3b-4911-83de-70886b9d0c0d\/index.html",
        "pm8AS0rNfMBv7rZRD9niMg"
    ],
    [
        "pages\/item-af5ebc9a-83b4-48e6-9465-7f2e94f305b5\/index.html",
        "HtNJS9Ctof86jE3j882hvA"
    ],
    [
        "pages\/item-51b1acee-9e5c-4756-998e-d6f3ba97882c\/index.html",
        "Kd0qErxreNHuSGnWJu9DOg"
    ],
    [
        "pages\/item-e5e58d0e-aa0b-4749-a9cb-e791b08d4105\/index.html",
        "5vNVj92UgtZTzXV33DxQ"
    ],
    [
        "pages\/item-d0e6ac0b-fc44-4be3-8e32-3647ddaeddd7\/index.html",
        "UOskHXjpSqXFGF3SJZdVg"
    ],
    [
        "pages\/item-adb4f6d7-5f7a-4620-ad3a-b0ff14343e60\/index.html",
        "OEsrnc7UaM2DNS9QVwXQEg"
    ],
    [
        "pages\/item-e115dd47-3a78-4e40-963e-46466a268290\/index.html",
        "vrgT86zGTDJZ2NeQTiWLRw"
    ],
    [
        "pages\/item-3c1bf773-d9e2-4658-84f8-6ab5e3f42ab2\/index.html",
        "lSP0qAT0d22PPuZU55FEXA"
    ],
    [
        "pages\/item-a54cdc47-2f1c-4d82-8baf-fce180194a81\/index.html",
        "Bwckal4Pw55cD0naBfZBFg"
    ],
    [
        "pages\/item-b2b17986-f13e-4d6e-93a6-6bd21c930c3c\/index.html",
        "Y4icbIbJbztbadGIwq4wxQ"
    ],
    [
        "pages\/item-13056366-d039-4d51-b3ae-a3fcd12cd107\/index.html",
        "svqhCCxNjBSbt04e90XvSg"
    ],
    [
        "pages\/item-3f3cc6fc-18c9-47cb-95bf-0295b6a9e82d\/index.html",
        "oFWyKk8ySBxSevow5ujQ"
    ],
    [
        "pages\/item-d597021d-28f9-402d-9d2c-8edff8c96e59\/index.html",
        "oTTgbJsClS9hkop6MpxAkQ"
    ],
    [
        "pages\/item-90f04b0e-75f3-424d-9e6f-4841af66ab6c\/index.html",
        "w32u0KtwMQuNcb7pWMgcPw"
    ],
    [
        "pages\/item-0d30bca9-c852-4b30-ae4e-abc519262d31\/index.html",
        "v5NCOJeffQ2j6FNv3NOXXw"
    ],
    [
        "pages\/item-5bcfc9da-de7b-4e0c-858d-1f7adde911a9\/index.html",
        "60nlEq8NFKEQFrXfe6ubA"
    ],
    [
        "pages\/item-39f2e47c-f0fb-4d87-9180-f0f8dedfbe44\/index.html",
        "xGoWfeejB56ICVucH4nlbw"
    ],
    [
        "pages\/item-635fe9b5-9bda-4658-a1af-3a366d123657\/index.html",
        "nDgqYNoJdQ6wZmgspcbO6g"
    ],
    [
        "pages\/item-14ee9de9-51d1-4a0d-9944-3ba6856ac053\/index.html",
        "E91qlhH31R2igNIHTQvtXQ"
    ],
    [
        "pages\/item-e56349a0-bcf9-427b-8b68-e092ae15061f\/index.html",
        "SBT6dcZFsbty5meeGZJQ"
    ],
    [
        "pages\/item-778bd19b-566a-422b-99d1-20f564f12489\/index.html",
        "xqyXdf1b4kBRzmxEaf5r8g"
    ],
    [
        "pages\/item-4d1a84b2-ddcb-4dbc-9b37-2d135442c32d\/index.html",
        "Jq6eEAKHwv623ipPcDkVGA"
    ],
    [
        "pages\/item-59855d23-c026-4b44-9c9f-d5414cc80e55\/index.html",
        "XSxgU11m7w2PxP9m0CkqQ"
    ],
    [
        "pages\/item-4bb1088a-8d44-4c7c-bf7c-89abe3787458\/index.html",
        "DjuR2MTw5ZuPWuSyetHjQ"
    ],
    [
        "pages\/item-cb3070a2-9525-41df-a6bb-91c2844c5ed5\/index.html",
        "SbW7agooshkeU9JsAUPw"
    ],
    [
        "pages\/item-2a102879-1110-4db4-a6b8-3b687f0fd2b1\/index.html",
        "wzKLVVBzHBrubptyNfVw"
    ],
    [
        "pages\/item-e730662d-1e5e-4519-b2cc-6689657eeced\/index.html",
        "anf67UynovwslA2X3XxLWQ"
    ],
    [
        "pages\/item-15525242-f6e9-4201-bbb1-cdd8f29176f6\/index.html",
        "D2GaKqkgnXjXv7TXIVHfg"
    ],
    [
        "pages\/item-22596832-8320-4c7f-b7ae-f403d1d9ca31\/index.html",
        "2ixNSWOt5WhkjauxJV8fRA"
    ],
    [
        "pages\/item-0e12b64d-2eb5-4cea-8a85-829ec279cfc7\/index.html",
        "xdP07JRG1KtSbfUxWhFIg"
    ],
    [
        "pages\/item-41d063cb-b6b6-4c42-8a0e-6208a4f98a89\/index.html",
        "6swLju1D9uMtZAXW3K44mQ"
    ],
    [
        "pages\/item-1fa59985-6bf9-4ac7-802b-bc52035f9323\/index.html",
        "Ns2fjyXVXAYoSRAxIzVF1A"
    ],
    [
        "pages\/item-b29033b8-b3a4-4025-8f6a-f869e044a1be\/index.html",
        "QBElIEc74inTi1qHIO5kg"
    ],
    [
        "pages\/item-f44c0f01-32e2-4e61-b965-3b24778abba0\/index.html",
        "ql2109qfJ2rFLIVMr3sVZQ"
    ],
    [
        "pages\/item-7b57c34b-d8b4-4401-baed-01e39cc0cd77\/index.html",
        "SPO5y6LUVf6IgN01GjQrg"
    ],
    [
        "pages\/item-4b788e81-94f5-4699-b885-37b664eb8d7f\/index.html",
        "K5KKDqyqOtz85g3VtIWg"
    ],
    [
        "pages\/item-14b2032a-5465-43dc-b1b3-122e9f09d5e4\/index.html",
        "xloaBNlvaVpcxIdXtiebA"
    ],
    [
        "pages\/item-585825f8-7d6a-4cf3-80cd-8fbed78053e6\/index.html",
        "BSFfXOtNO18fIUmhkMMSzQ"
    ],
    [
        "pages\/item-2ba3a0b9-8b5b-4e3f-bfed-a19c1a5edff3\/index.html",
        "2u0DIgS5nUP2JgxhIfSA"
    ],
    [
        "pages\/item-54584e9b-9350-45aa-8b4f-cf92272cb53d\/index.html",
        "Ndz6OS5urhJMQRlecY4alw"
    ],
    [
        "pages\/item-1d680323-87f4-4f28-bbd2-7268c9d4e172\/index.html",
        "pwfoMmacZhE6XvTtNXPn8A"
    ],
    [
        "pages\/item-0af79ce5-d4ef-4602-8207-b67c711d8cc7\/index.html",
        "UFyNiyL0RRFgwGMOl0DQIA"
    ],
    [
        "pages\/item-c835c36d-38f5-43ac-9296-0b1be7851ce6\/index.html",
        "BkmwlcZTGJzY0Xq5LECA"
    ],
    [
        "pages\/item-76c7ae2d-0520-48f6-957c-f4ec9f623736\/index.html",
        "bfMyJcNqpWSTpOE93eB8uQ"
    ],
    [
        "pages\/item-ad71d26c-8288-4a47-9b38-7e93baa49c53\/index.html",
        "KOLLmgTIliHtQeC5hi9g"
    ],
    [
        "pages\/item-178875ba-a955-48b5-855a-9e1435d5d840\/index.html",
        "Z5qXMMYNKipRYri6adAQg"
    ],
    [
        "pages\/item-4277ed25-a0ca-414c-a4ca-62e7d093d2f8\/index.html",
        "lbks962KcnZ9MlTW6vWtw"
    ],
    [
        "pages\/item-20addb32-74be-47bb-ab21-a8237d545b07\/index.html",
        "cihyRKpvo1kKYakncun3ew"
    ],
    [
        "pages\/item-eddf89ce-60f6-417b-8295-c0525219c230\/index.html",
        "YI8KlnC1rA8DS3K5IAQfUw"
    ],
    [
        "pages\/item-73fd1ab6-ba79-472d-9cc2-7828277a8e27\/index.html",
        "KGFZDxJNFKzohR5fguqfw"
    ],
    [
        "pages\/item-680a9a59-5691-424e-8f84-ee9019e39849\/index.html",
        "S6Jgz2jAIzD6RwVK8lNgxw"
    ],
    [
        "pages\/item-fbb47697-aa83-4b41-a3b4-ed8f9b2709c7\/index.html",
        "ROdOnXmaziIJnkgbLaWtQ"
    ],
    [
        "pages\/item-f3c9734c-89d9-41a9-b886-55d782c63114\/index.html",
        "Eg2tQ1iWSOTFA4jJditHQ"
    ],
    [
        "pages\/item-3be9e67a-53cb-4b3a-9f5b-dc0b40cda743\/index.html",
        "YbCVi0acMTVAEfIoMKo8A"
    ],
    [
        "pages\/item-e26fa70d-3b7b-4523-9779-909bc83b073d\/index.html",
        "Jj8guDdI9C4ggpPc2uO17Q"
    ],
    [
        "pages\/item-dec72ecf-71ad-480d-bb4b-105c4c83b676\/index.html",
        "gMJFar92N3RBUbkbleJ1vg"
    ],
    [
        "pages\/item-39d2b3f7-0ebc-43a6-88a3-5c1efd876b25\/index.html",
        "0lGa6JJSNIKXbyVzaQoA"
    ],
    [
        "pages\/item-5d3a6d3d-fd0d-4075-b9da-4116eefdca0b\/index.html",
        "VpfOIc6JXbSadTga4IOw2g"
    ],
    [
        "pages\/item-348f69b5-8bbb-4cf8-8eda-26b4141fffa6\/index.html",
        "wxXzkSkUVpD7SarRwD07A"
    ],
    [
        "pages\/item-ac8baab4-f493-4fd9-9826-5f79e2e44c03\/index.html",
        "3CjoKBBeTTRLJnfN9VE2A"
    ],
    [
        "pages\/item-76e43829-027c-481b-8b39-5d215b2b9670\/index.html",
        "cctBonTd8LYM9pmtGxay4A"
    ],
    [
        "pages\/item-225b6f65-9b18-4960-9ae8-7dd9face20a7\/index.html",
        "I7VL5vxtEmWWOIkdgz0EYw"
    ],
    [
        "pages\/item-50802aa4-f49e-4207-98d2-7ef3745568fc\/index.html",
        "eeKH3ubgboIEeEhNA4P9tg"
    ],
    [
        "pages\/item-2fdd27a1-190a-47c8-8192-910bc1afe0f5\/index.html",
        "sELbXZfFDo3uj3lOIdJKQ"
    ],
    [
        "pages\/item-8c122112-a265-4ef1-8968-1f12423da119\/index.html",
        "RAo0q7LjJ8i2piJtsyMaww"
    ],
    [
        "pages\/item-b1cf2586-d6a6-44b7-ba16-82fdfee99f01\/index.html",
        "FhgiDKEa0UiJWK8rOJhd8A"
    ],
    [
        "pages\/item-fd8d0496-8026-4f47-bd7f-8182e32cda98\/index.html",
        "K2ErKDQEFf812yxk9jLvA"
    ],
    [
        "pages\/item-ed31d08a-a26c-4357-a2a5-249705a63b81\/index.html",
        "bqpBLbsBfxDJVKyiJV7Bg"
    ],
    [
        "pages\/item-6527bda6-5e79-4530-a7b2-1c8885bcd89e\/index.html",
        "a8IDh0kdLBkqyjjOiddpdA"
    ],
    [
        "pages\/item-903151c6-bd94-4bbb-9335-4649de2f9445\/index.html",
        "iRCv69b92We0D6rb19ePgA"
    ],
    [
        "pages\/item-aae73811-4bb1-44ba-9215-05c90b9f9007\/index.html",
        "DXd3yO4ncsEarOlYlzzmTg"
    ],
    [
        "pages\/item-3e882dd4-4f71-4035-9ea0-26d840853c29\/index.html",
        "wyh8WMVIYlQIElk3R31v3g"
    ],
    [
        "pages\/item-ca6807b1-e87c-4cb5-989c-cb4331b5d031\/index.html",
        "rEiZfvys2NSU2tztP9DkDg"
    ],
    [
        "pages\/item-7a54e617-a1cf-456d-866c-442b200d9e53\/index.html",
        "eHffWC1JCh9J7yUDfyY6Xw"
    ],
    [
        "pages\/item-d4b650a4-47af-4734-b891-7a6db766ca3e\/index.html",
        "xAilhT7jv9rtF03lpHjUmg"
    ],
    [
        "pages\/item-2eccc2a9-90b2-4dab-a4cb-f36bc45bc0ff\/index.html",
        "R4UrmIKBCDKg7CuZgds2g"
    ],
    [
        "pages\/item-0265920d-6055-404d-a0e6-1ae71c4ce258\/index.html",
        "qQsBrTsC1og98Pky3DLlw"
    ],
    [
        "pages\/item-3577db8a-6017-4df6-a2bb-8ecad1a2bbe7\/index.html",
        "DedWmX7BOmTO6KOQ3hcCQg"
    ],
    [
        "pages\/item-8477c368-ebc7-403d-b576-5d1c450a629c\/index.html",
        "QQMqTEierCeuTmpFi2iiA"
    ],
    [
        "pages\/item-12563166-de6a-42ed-baa6-9d9f694e8312\/index.html",
        "rXqqX1kN0cIm58C2vAdmcw"
    ],
    [
        "pages\/item-9ffa23ac-c130-4a0c-92ee-481698e444a0\/index.html",
        "2LrYbQQZBHTR7J5x73pyZQ"
    ],
    [
        "pages\/item-b8f8fb5d-b05d-448d-814d-fac40fac14f6\/index.html",
        "ckAYOxfwRUuwx6gsGUuA"
    ],
    [
        "pages\/item-40583b55-32bf-40c7-8e81-99c054b9a764\/index.html",
        "lsi4ALyfRpdN8HnlQpsYA"
    ],
    [
        "pages\/item-42b47c5a-8ad2-4507-bef1-0488c65cc54a\/index.html",
        "jVc8RqhyIuBvQSBolDBg"
    ],
    [
        "pages\/item-23eb212e-a523-4d7b-862a-0a00cb786321\/index.html",
        "pM2cLq1rHOARx1UtP9h0Q"
    ],
    [
        "pages\/item-d57321c6-4106-45ec-89a4-8ebdf0af67f2\/index.html",
        "Wcnj1Q7konJL5B5JLIuNg"
    ],
    [
        "pages\/item-f37eeda2-e9b9-4039-84d5-f983ece1a6e5\/index.html",
        "t4CdQ1fbGPpkrq7Oo0jE9A"
    ],
    [
        "pages\/item-80c5b6c1-cbe0-4955-b80e-b2acccf7a3fe\/index.html",
        "tmxf5HgCNcK9baRePkSA"
    ],
    [
        "pages\/item-3af50499-d450-4068-b2d2-5893283d0e27\/index.html",
        "Dvb9a1lBWQQHzs6u5FiGNg"
    ],
    [
        "pages\/item-2b292b5e-6eb5-4031-9c82-7f3b7f87b236\/index.html",
        "daTzc0kP6rtbhUrVCBUVg"
    ],
    [
        "pages\/item-7607700d-d318-4479-a588-837ea13ecd8b\/index.html",
        "9CjLCcBYboY1Qgstp38dMg"
    ],
    [
        "pages\/item-e6b422fc-8920-45b1-9068-173399ca50b2\/index.html",
        "hkmxelQdWBCZBuF3ntTMQ"
    ],
    [
        "pages\/item-a9fbc83f-b923-4af7-b998-5da6864a527a\/index.html",
        "vcvO9pMgejMl4dAQslnUQ"
    ],
    [
        "pages\/item-8ec9cf78-ab0c-42ec-abee-7c906be0a487\/index.html",
        "MZNpBzbR2LmXiuUmDo76Qw"
    ],
    [
        "pages\/item-c8edb5fb-6fa9-4d47-b07f-e030d26c2a9f\/index.html",
        "U8MVyKX0TbWddNGBTnVbQ"
    ],
    [
        "pages\/item-cd65aa07-4bab-4f8f-8ffc-c2184f49ce9a\/index.html",
        "7zWTRJb3ZIao8dmvXdCIg"
    ],
    [
        "pages\/item-861b84da-33c7-49e8-bf25-7aa8d9206d3b\/index.html",
        "iOb2dSeLPNmR6mtHaMxEuA"
    ],
    [
        "index.html",
        "UBOFRmPjCO72u0SXQbx8fg"
    ],
    [
        "files\/haxcms-managed\/512x512-hax (1).png",
        "EchqxpyZTF5enZmXTUZJvQ"
    ],
    [
        "files\/haxcms-managed\/256x256-hax (1).png",
        "4TnCKr1x6CyCJzLnw764Mg"
    ],
    [
        "files\/haxcms-managed\/192x192-hax (1).png",
        "D6yWvy6Nm7jprhLAwMrHw"
    ],
    [
        "files\/haxcms-managed\/144x144-hax (1).png",
        "hfWAbrQcE2cSByQdyX57Gg"
    ],
    [
        "files\/haxcms-managed\/96x96-hax (1).png",
        "flOE8Si6SE41jiNViJaA"
    ],
    [
        "files\/haxcms-managed\/72x72-hax (1).png",
        "UaAxfbehpvAus288AA3DA"
    ],
    [
        "files\/haxcms-managed\/48x48-hax (1).png",
        "BfT5IBVvUGCuDXjMDhvQ"
    ],
    [
        "manifest.json",
        "vGBjnVMGxmjDu0wJUEAg"
    ],
    [
        "site.json",
        "7FcZqTi2OTpgr3VnKz7N6g"
    ],
    [
        "404.html",
        "fegVls1hG0rG6IyEHzqig"
    ],
    [
        "files\/hax-horizon-report-oct-2023.jpg",
        "yBluLjWNjSugr63Bh4nA"
    ],
    [
        "files\/book-7647732_640.png",
        "e4iynMAKgjTeiNHZOzMVlQ"
    ],
    [
        "files\/image14.png",
        "Lw4bseLPBdjvshfTNWMAgQ"
    ],
    [
        "files\/giphy.gif",
        "2ScuDE5YcJdyhrllpTHlg"
    ],
    [
        "files\/New User Script.docx",
        "mO6hZwdcYPjoKygh53ew"
    ],
    [
        "files\/Median Engagement by Duration.png",
        "lOhMlTpP3LFWRTelhudmw"
    ],
    [
        "files\/Screenshot from 2024-07-25 11-09-09.png",
        "qfsBHvBunbQBR7iKHU9Xw"
    ],
    [
        "files\/CopyQ.LchTVs.png",
        "XLxtFbCZskqbGQBENZgsRA"
    ],
    [
        "files\/image42.png",
        "v6wYl24jndr33E5GvERdRQ"
    ],
    [
        "files\/image23.png",
        "5JATZOCbf9zSh2ooRgvQg"
    ],
    [
        "files\/5_Structure.png",
        "0mlqg0DOmaol0LCQKW4bEA"
    ],
    [
        "files\/Screenshot from 2024-09-19 15-41-24.png",
        "cMQcn7BdIPZ0FhYC1Cogw"
    ],
    [
        "files\/hax-ecosystem-concepts.jpg",
        "5JCar6G18YldroOjKrig"
    ],
    [
        "files\/image38.png",
        "zAO1vUjXLxFg3fe0JcTg"
    ],
    [
        "files\/Bonj Szczygiel.png",
        "s6ZJWThGzBMzcvXBEz2jVQ"
    ],
    [
        "files\/CopyQ.vWFmgL.png",
        "UJzuGTznAQVHLgffkpDbpw"
    ],
    [
        "files\/image81.png",
        "l2LdiCTGdHds7gRHNMzW2A"
    ],
    [
        "files\/image27.png",
        "THfBQR6bx8FCd8CvR1ww"
    ],
    [
        "files\/CopyQ.AQQQjY.png",
        "1kV87sfqP1JfIP7OsWGbiQ"
    ],
    [
        "files\/image31.png",
        "v13ZklC2oDGKmeX0OnVNlA"
    ],
    [
        "files\/Lorem ipsum text.png",
        "9ePYJg9cEqpWG0KDbpoJTw"
    ],
    [
        "files\/image17.png",
        "gKtojd4s7BS7WLyGwMw"
    ],
    [
        "files\/Screenshot from 2024-07-25 10-36-031.png",
        "NVxop1KlkPIxZCSMJdYfg"
    ],
    [
        "files\/First-Time HAX User Tutorial Content.docx",
        "3eteMCM5bKAUcb1zMOrNw"
    ],
    [
        "files\/image49.png",
        "iPKgqonhNnJbUOD94Gp5Bw"
    ],
    [
        "files\/Scorecard for Monticello (50).png",
        "c0VfjUfrcytx7Wiyz4fg"
    ],
    [
        "files\/Ben Andrew 2.png",
        "s7NuqUY5WyTbbQsBPXveA"
    ],
    [
        "files\/Screenshot from 2024-07-25 10-22-591.png",
        "CROvLz1hic1zLWBwqByiZg"
    ],
    [
        "files\/Screenshot from 2023-05-03 14-18-10.png",
        "9WTWOSHBKu7z3cEZwISXeA"
    ],
    [
        "files\/image75.png",
        "ad2DloGFlHPSL6xscEqRw"
    ],
    [
        "files\/Screenshot from 2024-07-25 12-18-15.png",
        "mUI9V05jVc5KYlOTF1w8w"
    ],
    [
        "files\/image58.png",
        "F2XOSJDVzUvsT21hri7Reg"
    ],
    [
        "files\/HAXCms workflow.jpg",
        "h0QfGEQyTSwbkL9uFWojqw"
    ],
    [
        "files\/image63.png",
        "SigRIREYVgGjGdCCK7UrIA"
    ],
    [
        "files\/image43.png",
        "NW7vW1o4BT65zKBvITYeMA"
    ],
    [
        "files\/image80.png",
        "1VwOCVEwU1HrR8mD1P5g"
    ],
    [
        "files\/Peter 11.jpg",
        "BdsVi3u84qSK0uvt6T5bZA"
    ],
    [
        "files\/Scorecard for Super Metroid.png",
        "RSIxwm8x7AAdAhoZDWaw"
    ],
    [
        "files\/Evidence-Based Guidelines for Recording Slide-Based Lectures.pdf",
        "xn3SrYk4cJztxvWGvd5YA"
    ],
    [
        "files\/voice-recording-51645.89999999851.mp3",
        "crrVkG6h3PFvHzujUKf8RQ"
    ],
    [
        "files\/image48.png",
        "CVsspb90B6CifwxpSwyrQ"
    ],
    [
        "files\/CopyQ.TbvtjA.png",
        "ENQekIh6tFYADs2WREcYRA"
    ],
    [
        "files\/CopyQ.sztLns.png",
        "Lajcfj8QXM2BoECD2e6qA"
    ],
    [
        "files\/Scorecard for Saul Bass.png",
        "GtNCTnqP5vvsc8x5IWHLcw"
    ],
    [
        "files\/Scorecard for Versailles.png",
        "MfFJGau1gtzUNaVdNVnDMQ"
    ],
    [
        "files\/Featured_Article.png",
        "y1E0AYKT0dHk3d1k8khtKw"
    ],
    [
        "files\/HAX.psu World changer-circle.png",
        "BI0Wlc9kUy2duOEV7qjEw"
    ],
    [
        "files\/image4.png",
        "qyCOkaQkf5kAvqRlMt11Kw"
    ],
    [
        "files\/image9.png",
        "L9fqt6aIOEng2uyEA5Hmw"
    ],
    [
        "files\/image5.png",
        "pdFEBNkUQoxKjuDGICRiFg"
    ],
    [
        "files\/Ben Andrew 1.png",
        "Un5cEMSAR3W1djrfPUiASA"
    ],
    [
        "files\/woods.png",
        "g6XbVW2bDr7B87sRbyc3nQ"
    ],
    [
        "files\/CopyQ.YGHozZ.png",
        "NeGIZsTG8nTDnIQFG5wTg"
    ],
    [
        "files\/Book_at_50_percent.png",
        "dnsTYUQ4XtBoZ2AexpuHQ"
    ],
    [
        "files\/Screenshot from 2024-07-25 10-36-03.png",
        "7EnPOFJWCa3qzLxVOn8bg"
    ],
    [
        "files\/image74.png",
        "NIQYji3PhpgtHiJQhZCZKg"
    ],
    [
        "files\/Scorecard for Saul Bass1.png",
        "wvoKTOQLNo9ilPWB36FWQ"
    ],
    [
        "files\/image54.png",
        "nwnt24N2lir8BqunT9kQ"
    ],
    [
        "files\/image57.png",
        "42WOvNui9wVcXvLkgLr0Q"
    ],
    [
        "files\/7_Instruction2.png",
        "9lAQeFb9KDEnU21mps7z2A"
    ],
    [
        "files\/image10.png",
        "3cUdC9k1SWtSeDlsPGf0A"
    ],
    [
        "files\/Ben 2.jpg",
        "nvag9X7XXFMGFzvUA7AXAA"
    ],
    [
        "files\/image50.png",
        "nWDqsgwelRFzQJjXQVapQ"
    ],
    [
        "files\/Bonj 2.jpg",
        "euc9Gb2Z1pG3JlFGh2d0g"
    ],
    [
        "files\/14_Content1.png",
        "kpWBl58daYZc8xWu8WgqAw"
    ],
    [
        "files\/image25.png",
        "A2OHQRO5tuPM1DbVzjoIQ"
    ],
    [
        "files\/image18.png",
        "5XFeEbRS4Q2levoH8vZAg"
    ],
    [
        "files\/Memory Duration by Type.png",
        "aO3mH7npPKLqThVanF3tA"
    ],
    [
        "files\/image62.png",
        "loXE43cTNBFPjMVRydzAA"
    ],
    [
        "files\/eberly-logo.png",
        "PGv2UqzquxRAwCJpBB3QTg"
    ],
    [
        "files\/image33.png",
        "8grYFl6Mnzb3UAcz25ojA"
    ],
    [
        "files\/Screenshot from 2024-09-19 15-35-26.png",
        "ZC8SjcKB5hrn7vjPPV543g"
    ],
    [
        "files\/Scorecard for Calatravas Bridges (Part 2) EDITED.png",
        "Rze6f0lBoCNr5GNuMxru8Q"
    ],
    [
        "files\/Scorecard for Monticello.png",
        "zSyYjQ90Bmq8gDlDNOTRgw"
    ],
    [
        "files\/Screenshot from 2024-09-23 16-15-32.png",
        "NPp7Q2jV7IY9TcemqJHQ"
    ],
    [
        "files\/Peter Aeschbacher.png",
        "ErrOGoaq2qlB2WLSLxFmw"
    ],
    [
        "files\/Median Engagement by Duration.jpg",
        "KdGD449gAmxEvSwQ1kczA"
    ],
    [
        "files\/migration-CognitiveLoadTheoryIMGB2.webp",
        "9LTah5OAdKpzd2PE7D3Sg"
    ],
    [
        "files\/image35.png",
        "Yc86SYqgLwzAoCZ8G4yFg"
    ],
    [
        "files\/image41.png",
        "JisyTYrb14ahbWAT0JyEDw"
    ],
    [
        "files\/hax (1).png",
        "4VtO9TRHlWkHsiT0PDYzw"
    ],
    [
        "files\/ist-logo.png",
        "mtDJMNghW9aMtLy45Wl2Q"
    ],
    [
        "files\/ELMSLN-sustaining-innovation-05-08-2015.pdf",
        "oAUd9yqS5L7oDd93Gw47A"
    ],
    [
        "files\/Evidence-Based Guidelines for Recording Slide-Based Lectures1.pdf",
        "jHEIXeeOWZxUXYu4IPXkdQ"
    ],
    [
        "files\/Book_at_15_percent.png",
        "mxZroZfhCic9rFXYR7SiQ"
    ],
    [
        "files\/Screenshot from 2024-07-25 11-13-35.png",
        "IS5ywpwPYLu3FIHgWTffw"
    ],
    [
        "files\/Book at 50.png",
        "qU6RF9nBFq3XOI63ahzQHw"
    ],
    [
        "files\/Featured_Article_Blue1.png",
        "b78fBob9WHl5zvwcznvIA"
    ],
    [
        "files\/image70.png",
        "GSaqXUXXKQqoLejvwtD36A"
    ],
    [
        "files\/image53.png",
        "Gji4t5ohNSSUNBVpL5A4A"
    ],
    [
        "files\/image46.png",
        "6bJoahxVBTdq4Yht715w"
    ],
    [
        "files\/image72.png",
        "91SG6uaZcDq6cNguTcUpQ"
    ],
    [
        "files\/psu-mark.png",
        "0ItHXa9M11qSeu4erQQaqg"
    ],
    [
        "files\/image8.png",
        "JiQoJEDyQ2Uosmo4sFd4EQ"
    ],
    [
        "files\/Featured_Video_Faculty_Montage.png",
        "RVn8GtKFm462z8Da7gXjQ"
    ],
    [
        "files\/image16.png",
        "Btv3mNKgApNRYcGxwgqIg"
    ],
    [
        "files\/voice-recording-159216.70000000298.mp3",
        "mxrl0WsohkgQ9WPt3axOQ"
    ],
    [
        "files\/Bonj 1.jpg",
        "deeczzYeXIl7e3aWHrLPLA"
    ],
    [
        "files\/td-human-memory-3-types.webp",
        "HfXUZWl7ivo6hYk4hoDw"
    ],
    [
        "files\/image73.png",
        "B3PsRqae5uUlX5K1Xmg"
    ],
    [
        "files\/CopyQ.nGnEzH.png",
        "ZjOnlV8o0F6GcoyGu4yCCw"
    ],
    [
        "files\/ELMSLN-whitepaper-08-28-2014.pdf",
        "GudzyrhxB4Pn2Rjj5KerDQ"
    ],
    [
        "files\/image3.png",
        "hFa2sNpuVUSc9bEY1ziB0g"
    ],
    [
        "files\/image55.png",
        "nwQ5jOhhcMELM64KdEjCWw"
    ],
    [
        "files\/image22.png",
        "oY46L6vzN4O0wTyFHF1Tqw"
    ],
    [
        "files\/image37.png",
        "oOPMWGNZgKiFd7qHKGqA"
    ],
    [
        "files\/Screenshot from 2024-07-25 10-13-13.png",
        "FS248VZiAdoxRnaY62Oi3Q"
    ],
    [
        "files\/Scorecard for Calatravas Bridges (Part 2).png",
        "MvszYyC1XzpxH2Z4t0oVBw"
    ],
    [
        "files\/image36.png",
        "u26ja8KmfD5SXi8OkNoVw"
    ],
    [
        "files\/Featured_Article1.png",
        "ho3Vc9H1mjqcs78YHFoTQ"
    ],
    [
        "files\/Scorecard for Versailles1.png",
        "jjuF7jEkwINdrnyP3QXDRA"
    ],
    [
        "files\/CopyQ.AApGdq.png",
        "fmpp8LRcFpjBtOQKxe5qg"
    ],
    [
        "files\/Featured_Article_Alert_Immediate1.png",
        "R1l7G3JbfLVgfJ4Ks7I25g"
    ],
    [
        "files\/image56.png",
        "GSwLq3GwKcH1shKlXSoT1w"
    ],
    [
        "files\/17_Assessment1.png",
        "MLHIeOCQ3xeuBkQPjfjIA"
    ],
    [
        "files\/image51.png",
        "cnty1Rfnnh38kMh9t5nOBA"
    ],
    [
        "files\/Peter 1.jpg",
        "NviM4N6zqiKOJ4iyoMWaWw"
    ],
    [
        "files\/image59.png",
        "KSX7gygQIl0Sqbaf5PyXoQ"
    ],
    [
        "files\/Ben_Andrew.jpeg",
        "hI4m8ucddfSODQYCiqnL2w"
    ],
    [
        "files\/image40.png",
        "t2lTunjdB9N6eDBdIvIvlg"
    ],
    [
        "files\/CopyQ.ZcOCVW.png",
        "uZtR1bXw4cUWfIt5umI4CA"
    ],
    [
        "files\/Scorecard for Design-Art-Science.png",
        "0utCQHqecIMuEUzAz6Q"
    ],
    [
        "files\/image68.png",
        "UZDQEfazop2iQLfR3CuVw"
    ],
    [
        "files\/image28.png",
        "1Th9HFS4UxaEf4EOVVYNw"
    ],
    [
        "files\/Peter 3.jpg",
        "NC7nWzYXjdGeiTtYuFdg6Q"
    ],
    [
        "files\/image12.png",
        "A3NS0URCaw33lnzydEoeA"
    ],
    [
        "files\/image32.png",
        "xVIaBT87onFdiGX4n99w"
    ],
    [
        "files\/4_Pedagogy2.png",
        "K2aPI8RE3x2BchNiCwpFmw"
    ],
    [
        "files\/CopyQ.wRrLph.png",
        "QXvkStuQNGCp9v9n5q2mhA"
    ],
    [
        "files\/image30.png",
        "RYjCImYmONJ9SpcYKB4QQ"
    ],
    [
        "files\/image15.png",
        "iXn0z0M6TY5YzTDSuP7uuQ"
    ],
    [
        "files\/image76.png",
        "IEwZOir0Lt2WYq1vLkOg"
    ],
    [
        "files\/Ben 1.jpg",
        "PmE1it2EHzw8RjKWPvSA"
    ],
    [
        "files\/image79.png",
        "KuXmrwDLtRTG8h8HZdTuCQ"
    ],
    [
        "files\/Scorecard for Calatravas Bridges (Part 1).png",
        "W7jCbNRpBJO8Q9HGeMnA"
    ],
    [
        "files\/image61.png",
        "WQqCLZu5ZA5pSrS45y5A"
    ],
    [
        "files\/image65.png",
        "xo41j2cXrVLhX9MapiSiQ"
    ],
    [
        "files\/cognitive load diagram.jpeg",
        "TcYLxSgSn6E1lCJpNw9hWA"
    ],
    [
        "files\/image64.png",
        "fYzSNhFISkM0asHzUvEsDA"
    ],
    [
        "files\/HAXTheWeb.pdf",
        "nH1jQG8tAcGXgQt3XYVoUQ"
    ],
    [
        "files\/image52.png",
        "EclgxL0R7kbjxDyfjsASKw"
    ],
    [
        "files\/image69.png",
        "26Jk3W6RqzeiDf1Fn19XpQ"
    ],
    [
        "files\/voice-recording-1017381.7000000477.mp3",
        "Cd9GhSyq3GveD2fWw0n1A"
    ],
    [
        "files\/image19.png",
        "rx9FDne8pstKJxsCR34ghQ"
    ],
    [
        "files\/1_The Core.png",
        "PNE4MR0zGUZ3e5TZ42cb5g"
    ],
    [
        "files\/Memory Duration by Type1.png",
        "bJr0vR3E22me3SeIctiw"
    ],
    [
        "files\/image77.png",
        "9uvELaFVnLgGsLsWEA2bQ"
    ],
    [
        "files\/Screenshot from 2024-07-25 10-51-51.png",
        "RJLkYXuhBCgQyk70Az3sw"
    ],
    [
        "files\/PSU_ARC_RGB_REV_2C.svg",
        "dWMx0og32uZHNhA3afSGkw"
    ],
    [
        "files\/image60.png",
        "pDu87fTL9ItHTfKZCRL3w"
    ],
    [
        "files\/image39.png",
        "NhHduV43e8OQDz8Vawkg"
    ],
    [
        "files\/Peter Montage.png",
        "ysQaSTXGqRqsJGIl7IfYEg"
    ],
    [
        "files\/2_Outcomes.png",
        "yI406eYQsgENQ2ub7x3eIw"
    ],
    [
        "files\/HAX Course Ontology Draft Version.png",
        "3AAL1FDOPx4shhuJcuccA"
    ],
    [
        "files\/image44.png",
        "RkpAEdzom4Xb7HziihsiA"
    ],
    [
        "files\/image34.png",
        "Gx3TGKgd9E3zgTubGj3g"
    ],
    [
        "files\/image13.png",
        "sr1qtlBoqM4l2Khz2tW29w"
    ],
    [
        "files\/Test1.png",
        "YywqL07BiGBV3DYJUd5rfw"
    ],
    [
        "files\/Bonj_Szczygiel.png",
        "CiMqfhVGO5zu0ct82l3oGQ"
    ],
    [
        "files\/image11.png",
        "Q0VFzELC7x3o9P3tygcww"
    ],
    [
        "files\/image29.png",
        "uVQNujHm9Nah1CcdQVbmg"
    ],
    [
        "files\/image21.png",
        "YPox3LqILyz8XtQiyQyuw"
    ],
    [
        "files\/Screenshot from 2024-09-19 15-30-43.png",
        "l9GTEb9Fl3yaTpdhm7Exug"
    ],
    [
        "files\/image6.png",
        "YIjiv8EH1kG9S0f7r9YFg"
    ],
    [
        "files\/CognativeTheoryMML.jpeg",
        "MZFTzG1bdgUYbogYhAp9ew"
    ],
    [
        "files\/voice-recording-110659.80000000075.mp3",
        "UAs8lWaiPgmpwl7vd7zg"
    ],
    [
        "files\/HAX-The-Web.jpg",
        "mdAlRk54WsI4YHQXcKKxA"
    ],
    [
        "files\/image.png",
        "mU8oBw9vnMXRYPsA2UUmxg"
    ],
    [
        "files\/image7.png",
        "z7hjloC9mQ7FvjEI0XIadw"
    ],
    [
        "files\/Featured_Article_Blue.png",
        "NteUq7Wy1blJTW3OeePMGA"
    ],
    [
        "files\/Peter 11.png",
        "HsXBsSVaUVPz8LoCHtSrw"
    ],
    [
        "files\/image71.png",
        "m9LLcmGNQ3zzfH2wNKn2Nw"
    ],
    [
        "files\/image26.png",
        "QGwbxSHwtlpdn3Y6Jh0Eg"
    ],
    [
        "files\/image47.png",
        "w0Asx7b95mTt9Gy9H4w"
    ],
    [
        "files\/Screenshot from 2024-07-25 10-22-59.png",
        "b5GP8tiCI2QWS66tF9vlA"
    ],
    [
        "files\/HAX.psu World changer-circle1.png",
        "t70NjjVwy4gNj2ssHXS9uA"
    ],
    [
        "files\/hax-footer.jpg",
        "9rDSrS82fpL91tz3LpnXtg"
    ],
    [
        "files\/Peter_Aeschbacher.jpeg",
        "HNREQG5juHetziWhICHmuQ"
    ],
    [
        "files\/Peter 1.png",
        "FiQAMNCF2X2Suiy8DQ1TWA"
    ],
    [
        "files\/Screenshot from 2024-07-25 10-56-44.png",
        "FocPRoShF9nDAkls4KXmA"
    ],
    [
        "files\/CopyQ.pRVKqr.png",
        "Uj5mia1O2bhQxV2V7hnPUw"
    ],
    [
        "files\/CopyQ.allSms.png",
        "QN2FjrJwLvNun9GG5mvPQ"
    ],
    [
        "files\/hax.png",
        "FO5knqHvG28FSqeVpXh6A"
    ],
    [
        "files\/image45.png",
        "t0xQE846Dglpv0KDWLPwA"
    ],
    [
        "files\/image66.png",
        "NgSDNLgf9EX1vpt8Jgw"
    ],
    [
        "files\/hax-white-paper-02-27-2018.pdf",
        "KFwhUZArPEkXwU6I7Qkg"
    ],
    [
        "files\/Featured_Article_Alert_Immediate.png",
        "POl8Xx0lN3INGeyKprrqcw"
    ],
    [
        "files\/Memory Duration by Type2.png",
        "JDLXtGd1oYE2l65TDxZjbQ"
    ],
    [
        "files\/6_Instruction1.png",
        "uS1gNcVmw7cBzlkioeqZw"
    ],
    [
        "files\/image24.png",
        "8KV6MirIoWDhhpmIsNjQ"
    ],
    [
        "files\/Featured_Article2.png",
        "FpKYu1GLp8qnjx3F8xW8qw"
    ],
    [
        "files\/image20.png",
        "zxadcFBigiIGnATfA4wROQ"
    ],
    [
        "files\/image2.png",
        "7VMav7r69Ok78Hc0I4Jyw"
    ],
    [
        "files\/image78.png",
        "Kl0TQOsfrL1CS51MtNDy5g"
    ],
    [
        "files\/image1.png",
        "EvwPBn8czS61i4MqXEcw"
    ],
    [
        "files\/image67.png",
        "5VuZXs25iJprfcIQ9XoqtQ"
    ],
    [
        "files\/CopyQ.wKAPJI.png",
        "qWOzKnUY7I7TOsfLx4XkUA"
    ],
    [
        "files\/2019-03-12_16-45-51.png",
        "rvEknEJJwwxnbjQ862kg"
    ],
    [
        "files\/Peter 2.jpg",
        "C3uo0K9a4ZC7MJuU5bQ"
    ],
    [
        "files\/image82.png",
        "uI68WvMD9uZGKzOQykVbg"
    ]
];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === '/') {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise = 'body' in originalResponse ?
    Promise.resolve(originalResponse.body) :
    originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText
    });
  });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
  dontCacheBustUrlsMatching) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (!dontCacheBustUrlsMatching ||
    !(url.pathname.match(dontCacheBustUrlsMatching))) {
    url.search += (url.search ? '&' : '') +
      encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = (new URL(absoluteUrlString)).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (originalUrl,
  ignoreUrlParametersMatching) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = '';

  url.search = url.search.slice(1) // Exclude initial '?'
    .split('&') // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split('='); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join('='); // Join each [key, value] array into a 'key=value' string
    })
    .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, { credentials: 'same-origin' });
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {

      // Force the SW to transition from installing -> active state
      return self.skipWaiting();

    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {

      return self.clients.claim();

    })
  );
});


self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
      navigateFallback &&
      (event.request.mode === 'navigate') &&
      isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
!function (e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { var t; t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.toolbox = e() } }(function () { return function e(t, n, r) { function o(c, s) { if (!n[c]) { if (!t[c]) { var a = "function" == typeof require && require; if (!s && a) return a(c, !0); if (i) return i(c, !0); var u = new Error("Cannot find module '" + c + "'"); throw u.code = "MODULE_NOT_FOUND", u } var f = n[c] = { exports: {} }; t[c][0].call(f.exports, function (e) { var n = t[c][1][e]; return o(n ? n : e) }, f, f.exports, e, t, n, r) } return n[c].exports } for (var i = "function" == typeof require && require, c = 0; c < r.length; c++)o(r[c]); return o }({ 1: [function (e, t, n) { "use strict"; function r(e, t) { t = t || {}; var n = t.debug || m.debug; n && console.log("[sw-toolbox] " + e) } function o(e) { var t; return e && e.cache && (t = e.cache.name), t = t || m.cache.name, caches.open(t) } function i(e, t) { t = t || {}; var n = t.successResponses || m.successResponses; return fetch(e.clone()).then(function (r) { return "GET" === e.method && n.test(r.status) && o(t).then(function (n) { n.put(e, r).then(function () { var r = t.cache || m.cache; (r.maxEntries || r.maxAgeSeconds) && r.name && c(e, n, r) }) }), r.clone() }) } function c(e, t, n) { var r = s.bind(null, e, t, n); d = d ? d.then(r) : r() } function s(e, t, n) { var o = e.url, i = n.maxAgeSeconds, c = n.maxEntries, s = n.name, a = Date.now(); return r("Updating LRU order for " + o + ". Max entries is " + c + ", max age is " + i), g.getDb(s).then(function (e) { return g.setTimestampForUrl(e, o, a) }).then(function (e) { return g.expireEntries(e, c, i, a) }).then(function (e) { r("Successfully updated IDB."); var n = e.map(function (e) { return t.delete(e) }); return Promise.all(n).then(function () { r("Done with cache cleanup.") }) }).catch(function (e) { r(e) }) } function a(e, t, n) { return r("Renaming cache: [" + e + "] to [" + t + "]", n), caches.delete(t).then(function () { return Promise.all([caches.open(e), caches.open(t)]).then(function (t) { var n = t[0], r = t[1]; return n.keys().then(function (e) { return Promise.all(e.map(function (e) { return n.match(e).then(function (t) { return r.put(e, t) }) })) }).then(function () { return caches.delete(e) }) }) }) } function u(e, t) { return o(t).then(function (t) { return t.add(e) }) } function f(e, t) { return o(t).then(function (t) { return t.delete(e) }) } function h(e) { e instanceof Promise || p(e), m.preCacheItems = m.preCacheItems.concat(e) } function p(e) { var t = Array.isArray(e); if (t && e.forEach(function (e) { "string" == typeof e || e instanceof Request || (t = !1) }), !t) throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests."); return e } function l(e, t, n) { if (!e) return !1; if (t) { var r = e.headers.get("date"); if (r) { var o = new Date(r); if (o.getTime() + 1e3 * t < n) return !1 } } return !0 } var d, m = e("./options"), g = e("./idb-cache-expiration"); t.exports = { debug: r, fetchAndCache: i, openCache: o, renameCache: a, cache: u, uncache: f, precache: h, validatePrecacheInput: p, isResponseFresh: l } }, { "./idb-cache-expiration": 2, "./options": 4 }], 2: [function (e, t, n) { "use strict"; function r(e) { return new Promise(function (t, n) { var r = indexedDB.open(u + e, f); r.onupgradeneeded = function () { var e = r.result.createObjectStore(h, { keyPath: p }); e.createIndex(l, l, { unique: !1 }) }, r.onsuccess = function () { t(r.result) }, r.onerror = function () { n(r.error) } }) } function o(e) { return e in d || (d[e] = r(e)), d[e] } function i(e, t, n) { return new Promise(function (r, o) { var i = e.transaction(h, "readwrite"), c = i.objectStore(h); c.put({ url: t, timestamp: n }), i.oncomplete = function () { r(e) }, i.onabort = function () { o(i.error) } }) } function c(e, t, n) { return t ? new Promise(function (r, o) { var i = 1e3 * t, c = [], s = e.transaction(h, "readwrite"), a = s.objectStore(h), u = a.index(l); u.openCursor().onsuccess = function (e) { var t = e.target.result; if (t && n - i > t.value[l]) { var r = t.value[p]; c.push(r), a.delete(r), t.continue() } }, s.oncomplete = function () { r(c) }, s.onabort = o }) : Promise.resolve([]) } function s(e, t) { return t ? new Promise(function (n, r) { var o = [], i = e.transaction(h, "readwrite"), c = i.objectStore(h), s = c.index(l), a = s.count(); s.count().onsuccess = function () { var e = a.result; e > t && (s.openCursor().onsuccess = function (n) { var r = n.target.result; if (r) { var i = r.value[p]; o.push(i), c.delete(i), e - o.length > t && r.continue() } }) }, i.oncomplete = function () { n(o) }, i.onabort = r }) : Promise.resolve([]) } function a(e, t, n, r) { return c(e, n, r).then(function (n) { return s(e, t).then(function (e) { return n.concat(e) }) }) } var u = "sw-toolbox-", f = 1, h = "store", p = "url", l = "timestamp", d = {}; t.exports = { getDb: o, setTimestampForUrl: i, expireEntries: a } }, {}], 3: [function (e, t, n) { "use strict"; function r(e) { var t = a.match(e.request); t ? e.respondWith(t(e.request)) : a.default && "GET" === e.request.method && 0 === e.request.url.indexOf("http") && e.respondWith(a.default(e.request)) } function o(e) { s.debug("activate event fired"); var t = u.cache.name + "$$$inactive$$$"; e.waitUntil(s.renameCache(t, u.cache.name)) } function i(e) { return e.reduce(function (e, t) { return e.concat(t) }, []) } function c(e) { var t = u.cache.name + "$$$inactive$$$"; s.debug("install event fired"), s.debug("creating cache [" + t + "]"), e.waitUntil(s.openCache({ cache: { name: t } }).then(function (e) { return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function (t) { return s.debug("preCache list: " + (t.join(", ") || "(none)")), e.addAll(t) }) })) } e("serviceworker-cache-polyfill"); var s = e("./helpers"), a = e("./router"), u = e("./options"); t.exports = { fetchListener: r, activateListener: o, installListener: c } }, { "./helpers": 1, "./options": 4, "./router": 6, "serviceworker-cache-polyfill": 16 }], 4: [function (e, t, n) { "use strict"; var r; r = self.registration ? self.registration.scope : self.scope || new URL("./", self.location).href, t.exports = { cache: { name: "$$$toolbox-cache$$$" + r + "$$$", maxAgeSeconds: null, maxEntries: null }, debug: !1, networkTimeoutSeconds: null, preCacheItems: [], successResponses: /^0|([123]\d\d)|(40[14567])|410$/ } }, {}], 5: [function (e, t, n) { "use strict"; var r = new URL("./", self.location), o = r.pathname, i = e("path-to-regexp"), c = function (e, t, n, r) { t instanceof RegExp ? this.fullUrlRegExp = t : (0 !== t.indexOf("/") && (t = o + t), this.keys = [], this.regexp = i(t, this.keys)), this.method = e, this.options = r, this.handler = n }; c.prototype.makeHandler = function (e) { var t; if (this.regexp) { var n = this.regexp.exec(e); t = {}, this.keys.forEach(function (e, r) { t[e.name] = n[r + 1] }) } return function (e) { return this.handler(e, t, this.options) }.bind(this) }, t.exports = c }, { "path-to-regexp": 15 }], 6: [function (e, t, n) { "use strict"; function r(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var o = e("./route"), i = e("./helpers"), c = function (e, t) { for (var n = e.entries(), r = n.next(), o = []; !r.done;) { var i = new RegExp(r.value[0]); i.test(t) && o.push(r.value[1]), r = n.next() } return o }, s = function () { this.routes = new Map, this.routes.set(RegExp, new Map), this.default = null };["get", "post", "put", "delete", "head", "any"].forEach(function (e) { s.prototype[e] = function (t, n, r) { return this.add(e, t, n, r) } }), s.prototype.add = function (e, t, n, c) { c = c || {}; var s; t instanceof RegExp ? s = RegExp : (s = c.origin || self.location.origin, s = s instanceof RegExp ? s.source : r(s)), e = e.toLowerCase(); var a = new o(e, t, n, c); this.routes.has(s) || this.routes.set(s, new Map); var u = this.routes.get(s); u.has(e) || u.set(e, new Map); var f = u.get(e), h = a.regexp || a.fullUrlRegExp; f.has(h.source) && i.debug('"' + t + '" resolves to same regex as existing route.'), f.set(h.source, a) }, s.prototype.matchMethod = function (e, t) { var n = new URL(t), r = n.origin, o = n.pathname; return this._match(e, c(this.routes, r), o) || this._match(e, [this.routes.get(RegExp)], t) }, s.prototype._match = function (e, t, n) { if (0 === t.length) return null; for (var r = 0; r < t.length; r++) { var o = t[r], i = o && o.get(e.toLowerCase()); if (i) { var s = c(i, n); if (s.length > 0) return s[0].makeHandler(n) } } return null }, s.prototype.match = function (e) { return this.matchMethod(e.method, e.url) || this.matchMethod("any", e.url) }, t.exports = new s }, { "./helpers": 1, "./route": 5 }], 7: [function (e, t, n) { "use strict"; function r(e, t, n) { return n = n || {}, i.debug("Strategy: cache first [" + e.url + "]", n), i.openCache(n).then(function (t) { return t.match(e).then(function (t) { var r = n.cache || o.cache, c = Date.now(); return i.isResponseFresh(t, r.maxAgeSeconds, c) ? t : i.fetchAndCache(e, n) }) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 8: [function (e, t, n) { "use strict"; function r(e, t, n) { return n = n || {}, i.debug("Strategy: cache only [" + e.url + "]", n), i.openCache(n).then(function (t) { return t.match(e).then(function (e) { var t = n.cache || o.cache, r = Date.now(); if (i.isResponseFresh(e, t.maxAgeSeconds, r)) return e }) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 9: [function (e, t, n) { "use strict"; function r(e, t, n) { return o.debug("Strategy: fastest [" + e.url + "]", n), new Promise(function (r, c) { var s = !1, a = [], u = function (e) { a.push(e.toString()), s ? c(new Error('Both cache and network failed: "' + a.join('", "') + '"')) : s = !0 }, f = function (e) { e instanceof Response ? r(e) : u("No result returned") }; o.fetchAndCache(e.clone(), n).then(f, u), i(e, t, n).then(f, u) }) } var o = e("../helpers"), i = e("./cacheOnly"); t.exports = r }, { "../helpers": 1, "./cacheOnly": 8 }], 10: [function (e, t, n) { t.exports = { networkOnly: e("./networkOnly"), networkFirst: e("./networkFirst"), cacheOnly: e("./cacheOnly"), cacheFirst: e("./cacheFirst"), fastest: e("./fastest") } }, { "./cacheFirst": 7, "./cacheOnly": 8, "./fastest": 9, "./networkFirst": 11, "./networkOnly": 12 }], 11: [function (e, t, n) { "use strict"; function r(e, t, n) { n = n || {}; var r = n.successResponses || o.successResponses, c = n.networkTimeoutSeconds || o.networkTimeoutSeconds; return i.debug("Strategy: network first [" + e.url + "]", n), i.openCache(n).then(function (t) { var s, a, u = []; if (c) { var f = new Promise(function (r) { s = setTimeout(function () { t.match(e).then(function (e) { var t = n.cache || o.cache, c = Date.now(), s = t.maxAgeSeconds; i.isResponseFresh(e, s, c) && r(e) }) }, 1e3 * c) }); u.push(f) } var h = i.fetchAndCache(e, n).then(function (e) { if (s && clearTimeout(s), r.test(e.status)) return e; throw i.debug("Response was an HTTP error: " + e.statusText, n), a = e, new Error("Bad response") }).catch(function (r) { return i.debug("Network or response error, fallback to cache [" + e.url + "]", n), t.match(e).then(function (e) { if (e) return e; if (a) return a; throw r }) }); return u.push(h), Promise.race(u) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 12: [function (e, t, n) { "use strict"; function r(e, t, n) { return o.debug("Strategy: network only [" + e.url + "]", n), fetch(e) } var o = e("../helpers"); t.exports = r }, { "../helpers": 1 }], 13: [function (e, t, n) { "use strict"; var r = e("./options"), o = e("./router"), i = e("./helpers"), c = e("./strategies"), s = e("./listeners"); i.debug("Service Worker Toolbox is loading"), self.addEventListener("install", s.installListener), self.addEventListener("activate", s.activateListener), self.addEventListener("fetch", s.fetchListener), t.exports = { networkOnly: c.networkOnly, networkFirst: c.networkFirst, cacheOnly: c.cacheOnly, cacheFirst: c.cacheFirst, fastest: c.fastest, router: o, options: r, cache: i.cache, uncache: i.uncache, precache: i.precache } }, { "./helpers": 1, "./listeners": 3, "./options": 4, "./router": 6, "./strategies": 10 }], 14: [function (e, t, n) { t.exports = Array.isArray || function (e) { return "[object Array]" == Object.prototype.toString.call(e) } }, {}], 15: [function (e, t, n) { function r(e, t) { for (var n, r = [], o = 0, i = 0, c = "", s = t && t.delimiter || "/"; null != (n = x.exec(e));) { var f = n[0], h = n[1], p = n.index; if (c += e.slice(i, p), i = p + f.length, h) c += h[1]; else { var l = e[i], d = n[2], m = n[3], g = n[4], v = n[5], w = n[6], y = n[7]; c && (r.push(c), c = ""); var b = null != d && null != l && l !== d, E = "+" === w || "*" === w, R = "?" === w || "*" === w, k = n[2] || s, $ = g || v; r.push({ name: m || o++, prefix: d || "", delimiter: k, optional: R, repeat: E, partial: b, asterisk: !!y, pattern: $ ? u($) : y ? ".*" : "[^" + a(k) + "]+?" }) } } return i < e.length && (c += e.substr(i)), c && r.push(c), r } function o(e, t) { return s(r(e, t)) } function i(e) { return encodeURI(e).replace(/[\/?#]/g, function (e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) } function c(e) { return encodeURI(e).replace(/[?#]/g, function (e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) } function s(e) { for (var t = new Array(e.length), n = 0; n < e.length; n++)"object" == typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$")); return function (n, r) { for (var o = "", s = n || {}, a = r || {}, u = a.pretty ? i : encodeURIComponent, f = 0; f < e.length; f++) { var h = e[f]; if ("string" != typeof h) { var p, l = s[h.name]; if (null == l) { if (h.optional) { h.partial && (o += h.prefix); continue } throw new TypeError('Expected "' + h.name + '" to be defined') } if (v(l)) { if (!h.repeat) throw new TypeError('Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(l) + "`"); if (0 === l.length) { if (h.optional) continue; throw new TypeError('Expected "' + h.name + '" to not be empty') } for (var d = 0; d < l.length; d++) { if (p = u(l[d]), !t[f].test(p)) throw new TypeError('Expected all "' + h.name + '" to match "' + h.pattern + '", but received `' + JSON.stringify(p) + "`"); o += (0 === d ? h.prefix : h.delimiter) + p } } else { if (p = h.asterisk ? c(l) : u(l), !t[f].test(p)) throw new TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but received "' + p + '"'); o += h.prefix + p } } else o += h } return o } } function a(e) { return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1") } function u(e) { return e.replace(/([=!:$\/()])/g, "\\$1") } function f(e, t) { return e.keys = t, e } function h(e) { return e.sensitive ? "" : "i" } function p(e, t) { var n = e.source.match(/\((?!\?)/g); if (n) for (var r = 0; r < n.length; r++)t.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null }); return f(e, t) } function l(e, t, n) { for (var r = [], o = 0; o < e.length; o++)r.push(g(e[o], t, n).source); var i = new RegExp("(?:" + r.join("|") + ")", h(n)); return f(i, t) } function d(e, t, n) { return m(r(e, n), t, n) } function m(e, t, n) { v(t) || (n = t || n, t = []), n = n || {}; for (var r = n.strict, o = n.end !== !1, i = "", c = 0; c < e.length; c++) { var s = e[c]; if ("string" == typeof s) i += a(s); else { var u = a(s.prefix), p = "(?:" + s.pattern + ")"; t.push(s), s.repeat && (p += "(?:" + u + p + ")*"), p = s.optional ? s.partial ? u + "(" + p + ")?" : "(?:" + u + "(" + p + "))?" : u + "(" + p + ")", i += p } } var l = a(n.delimiter || "/"), d = i.slice(-l.length) === l; return r || (i = (d ? i.slice(0, -l.length) : i) + "(?:" + l + "(?=$))?"), i += o ? "$" : r && d ? "" : "(?=" + l + "|$)", f(new RegExp("^" + i, h(n)), t) } function g(e, t, n) { return v(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? p(e, t) : v(e) ? l(e, t, n) : d(e, t, n) } var v = e("isarray"); t.exports = g, t.exports.parse = r, t.exports.compile = o, t.exports.tokensToFunction = s, t.exports.tokensToRegExp = m; var x = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g") }, { isarray: 14 }], 16: [function (e, t, n) { !function () { var e = Cache.prototype.addAll, t = navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/); if (t) var n = t[1], r = parseInt(t[2]); e && (!t || "Firefox" === n && r >= 46 || "Chrome" === n && r >= 50) || (Cache.prototype.addAll = function (e) { function t(e) { this.name = "NetworkError", this.code = 19, this.message = e } var n = this; return t.prototype = Object.create(Error.prototype), Promise.resolve().then(function () { if (arguments.length < 1) throw new TypeError; return e = e.map(function (e) { return e instanceof Request ? e : String(e) }), Promise.all(e.map(function (e) { "string" == typeof e && (e = new Request(e)); var n = new URL(e.url).protocol; if ("http:" !== n && "https:" !== n) throw new t("Invalid scheme"); return fetch(e.clone()) })) }).then(function (r) { if (r.some(function (e) { return !e.ok })) throw new t("Incorrect response status"); return Promise.all(r.map(function (t, r) { return n.put(e[r], t) })) }).then(function () { }) }, Cache.prototype.add = function (e) { return this.addAll([e]) }) }() }, {}] }, {}, [13])(13) });


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

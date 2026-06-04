// Override Game Lab sound functions to prevent crashes
window.playSound = function(soundURL, loop) {
    console.log("Sound bypassed: " + soundURL);
};
window.stopSound = function(soundURL) {
    console.log("Stop sound bypassed: " + soundURL);
};

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  // initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5126a1ca-f21a-4426-af02-778ac6b2b567","d80fd867-7940-455e-978f-0672191cadee","0502a306-8e9b-4f55-9d0f-126fedd2e8b5","5c728ec6-2a91-4b41-996b-1c72536dc58c","38818037-6b7d-4641-85df-c6adf7963023","174a1ff2-59ed-4b29-afb3-4feb0dc9585b","fc4a3950-71ca-4e83-bbcc-dac04fa7738c","6b7bf4cf-568b-4eb2-b5f2-8245fe23fa7a","e571dcdb-5b20-46df-a581-3cbaaac9b4dd","522597a1-25d7-4c3a-838b-0a6660229de2","75b67cd6-ca4c-4c6e-8fc8-fd7d7f3ae848","de063bcb-a4ec-45be-8a35-ebd1007dad22","bbb12881-5cdb-4185-a870-741a815be31e","04f19e12-a90b-43c3-ab16-e8506d4089dc","1c715177-71df-45f7-910a-82d980f09a2f","b365d04f-b822-44d9-a583-025b86482a10","4c5132a2-ba86-4072-8de9-f7a4e38b6cb4","afa1d644-1618-4cc0-81ac-c4aed89f25c2","19476dc4-092a-4ad7-94a5-c3badabb2192","ebca2680-e203-4874-8624-a782b116353a","5c851469-1fe2-448f-ba18-3b7af01033ba","7600a565-7a9b-4735-956b-283182752ea1","da577638-f9d4-4895-9d62-3f9294160f31","9a0bf219-c5a2-4e14-9707-de8d4783a1c5","6ec10952-ff0b-457b-af10-ebdab9741dd9","76c93317-2667-4f44-85b6-3343b8fc6f4a","a6b557e7-7faf-4bad-a824-36652c1a65c1","37497c95-f936-4a42-aee0-bfa172861e93","6c37c538-4c5a-47b1-af55-5f87e2e3ccbd","68692540-087d-4ca7-8eae-2e53c3636fa8","62036fe6-b4b3-4607-9f52-7ba71c3bd9be","1b31b37b-2bff-4767-a01a-410c9f6a6c9b","6e8989e2-b414-46db-8458-1701c62bff54","fa3286ff-4840-4752-b520-1aebd523ed76","a4d9c334-a823-4328-8527-1c7a57759e5d","068d9245-37a8-47c3-b46e-5da20a2d72be","e25c5db2-f054-48e4-afcb-ca60cfd77ca5","b452bec7-b21a-4c46-9fba-d04fb2c6af79","b453d0ef-b8c7-4e01-b2c6-9cb1f71295a0","a58c284a-5ba9-4a40-9bfe-1e574a40ba37","a84f8bb0-6342-4816-9460-10856f901652","3dddae95-11f9-46dd-8ec3-fc39771bf8ad","b1c981ae-2997-4b0f-95d0-02a1378f19e8","b680b83c-fb31-40fc-aaa5-94104907fa76","5330445a-9a72-4fa4-acd2-2e29964207f1","17b011ca-4589-4ef7-8956-30f349610dce","f91ac697-9381-4abc-9c0d-9318c24e4b4b","c0decd42-9b19-4487-9a12-436a81506b51","d851a9cf-d60d-4ce1-97d5-f2fa51f4c8fd","a2d00ad3-a8f0-4039-bc96-1e9c754e7797","7c317492-d632-4489-97e3-7e9d2645d85a","3fc9de6a-3da7-4b34-9e14-a386d58d724c","26b4fe45-8cfc-477d-89fb-c150cdedfed7","2287621b-af64-42c3-9bc9-967e77e77a74","63b9c29c-b6b5-4fee-b4c4-7211c139f748","f52a8262-6bcb-4d2e-a3b5-a8dc240d42cf","fc41a982-acfc-441b-9acb-46c658311f1e","94c7115b-6725-4bf8-8e88-0d89f114bb1f","ba306a80-c857-49e9-a692-e03667ed0b9b","e3c96557-2840-4ec6-960e-158f627ddb8b","3f2809fd-b58d-4ceb-bfa6-db0806aeb0a9","aae8f584-cf04-483f-9970-5cc9a62b3ae0","21cd5689-fe4e-4bd4-9276-c99be0723b84","09e32a81-b705-417a-b894-486be528986b","7f991113-c138-4440-9287-b25228b55b87","990012c6-db7a-47ac-95cd-2addcaa4c785","7a3b8177-8b09-496c-9057-3f7bc7efc82d","b9d97074-2105-4423-a604-b3faadbc353f","60fef605-d220-48d5-8104-32daea66097f","e945579f-b4e9-4a5f-a896-2f4b210929ff","b69fee89-ba7e-4fac-9c69-1adf62973735","d78a2a03-e8a5-4c52-a3e9-3a0749eb7e4b","e78e3074-8193-42b7-ac3e-16e52125217a","56c325f9-35f5-4116-a034-b760975121c4","3009e21f-3480-44f2-9da7-4a60c16c6836","13a1043a-a3d5-450a-b93c-fec0f2686630","8208535b-dc80-4242-a793-625be3414270","b1bb9a9e-f9cb-4184-bc65-3ef0f8f5dce5","7092fb53-4a0c-4fb4-9225-d12e5dc8812d","be8b9136-4edc-4b8f-a357-dddd0fb54e76","37668914-3eae-4bcd-8b13-69f859e5e1cf","a0c438e5-f972-4721-8055-d3344ea179f8","486b3275-384b-408a-966a-6ae1d6a89ac1","3635c3d0-b374-48f3-96b9-afec305684dc","f9d1bfa7-8ba2-4171-af10-f628c1dceec2","9930865f-c54b-4c97-9d8d-cdcce9ca3298","8aa6e9cd-38f3-46b9-b686-00d650a24f3a"],"propsByKey":{"5126a1ca-f21a-4426-af02-778ac6b2b567":{"name":"ICEFront","sourceUrl":null,"frameSize":{"x":59,"y":96},"frameCount":2,"looping":true,"frameDelay":12,"version":"fpcpyW46C.2TClndRoOeDq0Mp.JrUFNO","loadedFromSource":true,"saved":true,"sourceSize":{"x":118,"y":96},"rootRelativePath":"assets/5126a1ca-f21a-4426-af02-778ac6b2b567.png"},"d80fd867-7940-455e-978f-0672191cadee":{"name":"IceLSide","sourceUrl":null,"frameSize":{"x":28,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"nwvodq1FMAWNb4S_KqRRJMae41vtCNkA","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":82},"rootRelativePath":"assets/d80fd867-7940-455e-978f-0672191cadee.png"},"0502a306-8e9b-4f55-9d0f-126fedd2e8b5":{"name":"IceLPunch","sourceUrl":null,"frameSize":{"x":40,"y":82},"frameCount":2,"looping":false,"frameDelay":4,"version":"PTsji6PSGAMMLpVfD3nLejnyq7p.5XtW","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":82},"rootRelativePath":"assets/0502a306-8e9b-4f55-9d0f-126fedd2e8b5.png"},"5c728ec6-2a91-4b41-996b-1c72536dc58c":{"name":"IceRPunch","sourceUrl":null,"frameSize":{"x":40,"y":82},"frameCount":2,"looping":false,"frameDelay":4,"version":"jSBKej3QIDrwVK3KZzw8tKS1RcEbkfSV","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":82},"rootRelativePath":"assets/5c728ec6-2a91-4b41-996b-1c72536dc58c.png"},"38818037-6b7d-4641-85df-c6adf7963023":{"name":"IceLWalk","sourceUrl":null,"frameSize":{"x":28,"y":82},"frameCount":4,"looping":true,"frameDelay":5,"version":"2NC_rxw3EXoXT3.pHBOAghMmzk_e1uv.","loadedFromSource":true,"saved":true,"sourceSize":{"x":84,"y":164},"rootRelativePath":"assets/38818037-6b7d-4641-85df-c6adf7963023.png"},"174a1ff2-59ed-4b29-afb3-4feb0dc9585b":{"name":"IceRWalk","sourceUrl":null,"frameSize":{"x":28,"y":82},"frameCount":4,"looping":true,"frameDelay":5,"version":"TKYOIltIVg6wqN4fBIYO1qbz8QkMCYF_","loadedFromSource":true,"saved":true,"sourceSize":{"x":84,"y":164},"rootRelativePath":"assets/174a1ff2-59ed-4b29-afb3-4feb0dc9585b.png"},"fc4a3950-71ca-4e83-bbcc-dac04fa7738c":{"name":"IceRSide","sourceUrl":null,"frameSize":{"x":28,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"H1Pbhjq60zo6iuPeDHhM_XXGeoW4Rp7E","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":82},"rootRelativePath":"assets/fc4a3950-71ca-4e83-bbcc-dac04fa7738c.png"},"6b7bf4cf-568b-4eb2-b5f2-8245fe23fa7a":{"name":"PlayerRIdle","sourceUrl":null,"frameSize":{"x":24,"y":75},"frameCount":2,"looping":true,"frameDelay":12,"version":"1HhvzCSF7waRuM1Y..mRN6RzgpcZgZLk","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":75},"rootRelativePath":"assets/6b7bf4cf-568b-4eb2-b5f2-8245fe23fa7a.png"},"e571dcdb-5b20-46df-a581-3cbaaac9b4dd":{"name":"PlayerFront","sourceUrl":null,"frameSize":{"x":50,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"Bz7ZSmiaZRb03WZQfeMexaThQ2Tp_N6D","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":75},"rootRelativePath":"assets/e571dcdb-5b20-46df-a581-3cbaaac9b4dd.png"},"522597a1-25d7-4c3a-838b-0a6660229de2":{"name":"PlayerJDFightIdle","sourceUrl":null,"frameSize":{"x":34,"y":75},"frameCount":2,"looping":true,"frameDelay":12,"version":"aM_3mCaVN85oA2ELE3M5_x3kNEyEwJLX","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":75},"rootRelativePath":"assets/522597a1-25d7-4c3a-838b-0a6660229de2.png"},"75b67cd6-ca4c-4c6e-8fc8-fd7d7f3ae848":{"name":"PlayerJDFightShoot","sourceUrl":null,"frameSize":{"x":34,"y":75},"frameCount":2,"looping":false,"frameDelay":12,"version":"qWROaBMrk.dZaN4tD1QmEq4qKamLZzqZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":75},"rootRelativePath":"assets/75b67cd6-ca4c-4c6e-8fc8-fd7d7f3ae848.png"},"de063bcb-a4ec-45be-8a35-ebd1007dad22":{"name":"PlayerRPunch","sourceUrl":null,"frameSize":{"x":28,"y":75},"frameCount":2,"looping":false,"frameDelay":4,"version":"u_cTPOEiNUovd1hhrSoJm6OOxQIPBkJa","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":75},"rootRelativePath":"assets/de063bcb-a4ec-45be-8a35-ebd1007dad22.png"},"bbb12881-5cdb-4185-a870-741a815be31e":{"name":"PlayerLPunch","sourceUrl":null,"frameSize":{"x":28,"y":75},"frameCount":2,"looping":false,"frameDelay":4,"version":"2aWaN6R0UgLyJDH9fr6ctHcERibvM69U","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":75},"rootRelativePath":"assets/bbb12881-5cdb-4185-a870-741a815be31e.png"},"04f19e12-a90b-43c3-ab16-e8506d4089dc":{"name":"PlayerLIdle","sourceUrl":null,"frameSize":{"x":24,"y":75},"frameCount":2,"looping":true,"frameDelay":12,"version":"0T68ANSwWv8JZupByY2gkBmqtjCtfQ1g","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":75},"rootRelativePath":"assets/04f19e12-a90b-43c3-ab16-e8506d4089dc.png"},"1c715177-71df-45f7-910a-82d980f09a2f":{"name":"PlayerRWalk","sourceUrl":null,"frameSize":{"x":31,"y":78},"frameCount":4,"looping":true,"frameDelay":4,"version":"ikPSpizi1Vzm8VbihmAhNqIhiiN_Na5.","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":156},"rootRelativePath":"assets/1c715177-71df-45f7-910a-82d980f09a2f.png"},"b365d04f-b822-44d9-a583-025b86482a10":{"name":"PlayerJDRWalk","sourceUrl":null,"frameSize":{"x":33,"y":78},"frameCount":4,"looping":true,"frameDelay":4,"version":"S14vXzsLD7PC51CV57RPZFBUI5e5nJ8j","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":156},"rootRelativePath":"assets/b365d04f-b822-44d9-a583-025b86482a10.png"},"4c5132a2-ba86-4072-8de9-f7a4e38b6cb4":{"name":"PlayerJDLWalk","sourceUrl":null,"frameSize":{"x":33,"y":78},"frameCount":4,"looping":true,"frameDelay":4,"version":"IZIFgTd1vBK0n5C4m6S3ZYokM5WaNFIG","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":156},"rootRelativePath":"assets/4c5132a2-ba86-4072-8de9-f7a4e38b6cb4.png"},"afa1d644-1618-4cc0-81ac-c4aed89f25c2":{"name":"StartAnim","sourceUrl":null,"frameSize":{"x":46,"y":81},"frameCount":7,"looping":true,"frameDelay":5,"version":"zF7qe53eMVJYkC2KK34QZIALw88VlQfr","loadedFromSource":true,"saved":true,"sourceSize":{"x":184,"y":162},"rootRelativePath":"assets/afa1d644-1618-4cc0-81ac-c4aed89f25c2.png"},"19476dc4-092a-4ad7-94a5-c3badabb2192":{"name":"PlayerLWalk","sourceUrl":null,"frameSize":{"x":31,"y":78},"frameCount":4,"looping":true,"frameDelay":4,"version":"j3valMTB75RZpplLa_kQC46Luww_0.ma","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":156},"rootRelativePath":"assets/19476dc4-092a-4ad7-94a5-c3badabb2192.png"},"ebca2680-e203-4874-8624-a782b116353a":{"name":"StartMenuBG","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":".xTqy3q6AFClCCFtPogIuINjo88E2x8i","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/ebca2680-e203-4874-8624-a782b116353a.png"},"5c851469-1fe2-448f-ba18-3b7af01033ba":{"name":"StartStoryBG","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"0SnwyUAR3uMiiceD0SaaFPQnj9ARZoH.","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/5c851469-1fe2-448f-ba18-3b7af01033ba.png"},"7600a565-7a9b-4735-956b-283182752ea1":{"name":"Ceiling","sourceUrl":null,"frameSize":{"x":100,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"LJ1336du7lKa8RFUbhsHMnus1McHCOP4","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":19},"rootRelativePath":"assets/7600a565-7a9b-4735-956b-283182752ea1.png"},"da577638-f9d4-4895-9d62-3f9294160f31":{"name":"punchICE","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"qPdDUIHchQd7BVLG7pKrW6j.CmFl2MsB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/da577638-f9d4-4895-9d62-3f9294160f31.png"},"9a0bf219-c5a2-4e14-9707-de8d4783a1c5":{"name":"Stage2","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"ml_jyPedbdTSOUTjCe8NiGsPPP55Bsdr","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/9a0bf219-c5a2-4e14-9707-de8d4783a1c5.png"},"6ec10952-ff0b-457b-af10-ebdab9741dd9":{"name":"Stage4","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"yeJhEidDOHs2unuPONjZmThX6In_D3f4","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/6ec10952-ff0b-457b-af10-ebdab9741dd9.png"},"76c93317-2667-4f44-85b6-3343b8fc6f4a":{"name":"Car","sourceUrl":null,"frameSize":{"x":50,"y":30},"frameCount":2,"looping":true,"frameDelay":4,"version":"qAqPsbYupX6WLy1lJF1rOmp0L8qle2KV","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":60},"rootRelativePath":"assets/76c93317-2667-4f44-85b6-3343b8fc6f4a.png"},"a6b557e7-7faf-4bad-a824-36652c1a65c1":{"name":"PCapsule","sourceUrl":null,"frameSize":{"x":43,"y":44},"frameCount":5,"looping":true,"frameDelay":1,"version":"lWjs3zeT7LzyCUJAVZuCyRwHbuekkKlB","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":132},"rootRelativePath":"assets/a6b557e7-7faf-4bad-a824-36652c1a65c1.png"},"37497c95-f936-4a42-aee0-bfa172861e93":{"name":"GregoryBovinoCutscene","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":3,"looping":true,"frameDelay":3,"version":"3BcnpdyCljwYVDsPPhHTm7Q0e.SSrtUH","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/37497c95-f936-4a42-aee0-bfa172861e93.png"},"6c37c538-4c5a-47b1-af55-5f87e2e3ccbd":{"name":"GregoryBovinoLIdle","sourceUrl":null,"frameSize":{"x":75,"y":162},"frameCount":2,"looping":true,"frameDelay":12,"version":"6ELAc0AVHxutCuH64cojp.Ms2FSlm3OB","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":162},"rootRelativePath":"assets/6c37c538-4c5a-47b1-af55-5f87e2e3ccbd.png"},"68692540-087d-4ca7-8eae-2e53c3636fa8":{"name":"GregoryBovinoLIdleOwie","sourceUrl":null,"frameSize":{"x":75,"y":162},"frameCount":2,"looping":true,"frameDelay":12,"version":"Ln9TijOhjWNOTCatIp_f6jbq4KxefObX","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":162},"rootRelativePath":"assets/68692540-087d-4ca7-8eae-2e53c3636fa8.png"},"62036fe6-b4b3-4607-9f52-7ba71c3bd9be":{"name":"GregoryBovinoRIdleOwie","sourceUrl":null,"frameSize":{"x":75,"y":162},"frameCount":2,"looping":true,"frameDelay":12,"version":"uD4AQqIycwm5Fyr1BtdyrFsTPMAUpXHj","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":162},"rootRelativePath":"assets/62036fe6-b4b3-4607-9f52-7ba71c3bd9be.png"},"1b31b37b-2bff-4767-a01a-410c9f6a6c9b":{"name":"GregoryBovinoLPunch","sourceUrl":null,"frameSize":{"x":94,"y":162},"frameCount":2,"looping":true,"frameDelay":3,"version":"KhVi5BwxOIZp5gf8m4OwqvZHakgjti5D","loadedFromSource":true,"saved":true,"sourceSize":{"x":188,"y":162},"rootRelativePath":"assets/1b31b37b-2bff-4767-a01a-410c9f6a6c9b.png"},"6e8989e2-b414-46db-8458-1701c62bff54":{"name":"GregoryBovinoLPunchOwie","sourceUrl":null,"frameSize":{"x":94,"y":162},"frameCount":2,"looping":true,"frameDelay":3,"version":"bgOXrZSOA04Y79l.hrK0hT8_Z0i4r54I","loadedFromSource":true,"saved":true,"sourceSize":{"x":188,"y":162},"rootRelativePath":"assets/6e8989e2-b414-46db-8458-1701c62bff54.png"},"fa3286ff-4840-4752-b520-1aebd523ed76":{"name":"GregoryBovinoRPunchOwie","sourceUrl":null,"frameSize":{"x":94,"y":162},"frameCount":2,"looping":true,"frameDelay":3,"version":"Nw9LigjnC_lTsCrRuzZIcFGOmdTiy1Ui","loadedFromSource":true,"saved":true,"sourceSize":{"x":188,"y":162},"rootRelativePath":"assets/fa3286ff-4840-4752-b520-1aebd523ed76.png"},"a4d9c334-a823-4328-8527-1c7a57759e5d":{"name":"GregoryBovinoRPunch","sourceUrl":null,"frameSize":{"x":94,"y":162},"frameCount":2,"looping":true,"frameDelay":3,"version":"oEZ1KoIIzoNSIjEphMn9tWkwSBJq4DxO","loadedFromSource":true,"saved":true,"sourceSize":{"x":188,"y":162},"rootRelativePath":"assets/a4d9c334-a823-4328-8527-1c7a57759e5d.png"},"068d9245-37a8-47c3-b46e-5da20a2d72be":{"name":"GregoryBovinoLWalk","sourceUrl":null,"frameSize":{"x":75,"y":162},"frameCount":2,"looping":true,"frameDelay":12,"version":"JgpBs_OUdaA2u2bN_zv.epgMVenDJl9l","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":162},"rootRelativePath":"assets/068d9245-37a8-47c3-b46e-5da20a2d72be.png"},"e25c5db2-f054-48e4-afcb-ca60cfd77ca5":{"name":"GregoryBovinoLWalkOwie","sourceUrl":null,"frameSize":{"x":75,"y":162},"frameCount":2,"looping":true,"frameDelay":12,"version":"1Mqta_npMS4xJA83Uf8ImIqtF2veobVu","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":162},"rootRelativePath":"assets/e25c5db2-f054-48e4-afcb-ca60cfd77ca5.png"},"b452bec7-b21a-4c46-9fba-d04fb2c6af79":{"name":"GregoryBovinoRWalkOwie","sourceUrl":null,"frameSize":{"x":75,"y":162},"frameCount":2,"looping":true,"frameDelay":12,"version":"7o_MY7KZYsO_MfxZzPEy5hjRND2xGy5q","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":162},"rootRelativePath":"assets/b452bec7-b21a-4c46-9fba-d04fb2c6af79.png"},"b453d0ef-b8c7-4e01-b2c6-9cb1f71295a0":{"name":"GregoryBovinoRWalk","sourceUrl":null,"frameSize":{"x":75,"y":162},"frameCount":2,"looping":true,"frameDelay":12,"version":"NMhnLcGiG5bTPtE4IDnigdxkybv2FUws","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":162},"rootRelativePath":"assets/b453d0ef-b8c7-4e01-b2c6-9cb1f71295a0.png"},"a58c284a-5ba9-4a40-9bfe-1e574a40ba37":{"name":"GregoryBovinoRIdle","sourceUrl":null,"frameSize":{"x":75,"y":162},"frameCount":2,"looping":true,"frameDelay":12,"version":"0ZXb1TLgzcdcZ1xYhe5oW2Btdc.K93ge","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":162},"rootRelativePath":"assets/a58c284a-5ba9-4a40-9bfe-1e574a40ba37.png"},"a84f8bb0-6342-4816-9460-10856f901652":{"name":"airplaneBG","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"pg_C8BjY3LCnoETdmMX8NMk_UIE7rmie","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/a84f8bb0-6342-4816-9460-10856f901652.png"},"3dddae95-11f9-46dd-8ec3-fc39771bf8ad":{"name":"airplane","sourceUrl":null,"frameSize":{"x":300,"y":151},"frameCount":1,"looping":true,"frameDelay":12,"version":"VChrzHZodXFEldt9a6ojQDeA5rUPXn2C","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":151},"rootRelativePath":"assets/3dddae95-11f9-46dd-8ec3-fc39771bf8ad.png"},"b1c981ae-2997-4b0f-95d0-02a1378f19e8":{"name":"Map","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":7,"looping":false,"frameDelay":30,"version":"f0oP0Rpkh9WiOje0Xzkbp2tFB0aZsclJ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/b1c981ae-2997-4b0f-95d0-02a1378f19e8.png"},"b680b83c-fb31-40fc-aaa5-94104907fa76":{"name":"WMStage7-9","sourceUrl":null,"frameSize":{"x":923,"y":577},"frameCount":1,"looping":true,"frameDelay":12,"version":".ix7MOm0QhShL2nKwCvAlh_5jeAQHyla","loadedFromSource":true,"saved":true,"sourceSize":{"x":923,"y":577},"rootRelativePath":"assets/b680b83c-fb31-40fc-aaa5-94104907fa76.png"},"5330445a-9a72-4fa4-acd2-2e29964207f1":{"name":"cloud","sourceUrl":null,"frameSize":{"x":100,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":"DuD9HF.zv_SniTatLqsK1AO8RR.juX2v","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":44},"rootRelativePath":"assets/5330445a-9a72-4fa4-acd2-2e29964207f1.png"},"17b011ca-4589-4ef7-8956-30f349610dce":{"name":"cloud2","sourceUrl":null,"frameSize":{"x":100,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":"kgeXz.g7muRjkJWQYR.dVH9KbDZG1RCs","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":44},"rootRelativePath":"assets/17b011ca-4589-4ef7-8956-30f349610dce.png"},"f91ac697-9381-4abc-9c0d-9318c24e4b4b":{"name":"ElonMuskLIdle","sourceUrl":null,"frameSize":{"x":65,"y":160},"frameCount":2,"looping":true,"frameDelay":12,"version":"lA0GmlDvo.3RW6Ys7zFvRiLolpmJ4hdm","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":160},"rootRelativePath":"assets/f91ac697-9381-4abc-9c0d-9318c24e4b4b.png"},"c0decd42-9b19-4487-9a12-436a81506b51":{"name":"ElonMuskLFlame","sourceUrl":null,"frameSize":{"x":75,"y":160},"frameCount":11,"looping":false,"frameDelay":12,"version":"oR76lY06WgnGylH_K2_nzWsAIlYs6Sz8","loadedFromSource":true,"saved":true,"sourceSize":{"x":375,"y":480},"rootRelativePath":"assets/c0decd42-9b19-4487-9a12-436a81506b51.png"},"d851a9cf-d60d-4ce1-97d5-f2fa51f4c8fd":{"name":"ElonMuskV2LFlame","sourceUrl":null,"frameSize":{"x":75,"y":160},"frameCount":11,"looping":false,"frameDelay":12,"version":"HwXvbOCPfa.qhwsY36ERu_7DJ6Rf4OmM","loadedFromSource":true,"saved":true,"sourceSize":{"x":375,"y":480},"rootRelativePath":"assets/d851a9cf-d60d-4ce1-97d5-f2fa51f4c8fd.png"},"a2d00ad3-a8f0-4039-bc96-1e9c754e7797":{"name":"ElonMuskV2RFlame","sourceUrl":null,"frameSize":{"x":75,"y":160},"frameCount":11,"looping":false,"frameDelay":12,"version":"KdzXqtUNvBf1QTCyJ6v6nd_qXEcEdoOs","loadedFromSource":true,"saved":true,"sourceSize":{"x":375,"y":480},"rootRelativePath":"assets/a2d00ad3-a8f0-4039-bc96-1e9c754e7797.png"},"7c317492-d632-4489-97e3-7e9d2645d85a":{"name":"ElonMuskRFlame","sourceUrl":null,"frameSize":{"x":75,"y":160},"frameCount":11,"looping":false,"frameDelay":12,"version":"mUWfoXEfff2jWaWbml2J0_HoUOqg1sd3","loadedFromSource":true,"saved":true,"sourceSize":{"x":375,"y":480},"rootRelativePath":"assets/7c317492-d632-4489-97e3-7e9d2645d85a.png"},"3fc9de6a-3da7-4b34-9e14-a386d58d724c":{"name":"ElonMuskRIdle","sourceUrl":null,"frameSize":{"x":65,"y":160},"frameCount":2,"looping":true,"frameDelay":12,"version":"D9BfMO6JsQv4cBIsb2Niw7vzSK1NEiD.","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":160},"rootRelativePath":"assets/3fc9de6a-3da7-4b34-9e14-a386d58d724c.png"},"26b4fe45-8cfc-477d-89fb-c150cdedfed7":{"name":"ElonMuskRRun","sourceUrl":null,"frameSize":{"x":65,"y":160},"frameCount":2,"looping":true,"frameDelay":4,"version":"EupbUezkKHQ_PAYxPla2wVy31jWrpCtR","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":160},"rootRelativePath":"assets/26b4fe45-8cfc-477d-89fb-c150cdedfed7.png"},"2287621b-af64-42c3-9bc9-967e77e77a74":{"name":"ElonMuskV2RIdle","sourceUrl":null,"frameSize":{"x":65,"y":160},"frameCount":2,"looping":true,"frameDelay":12,"version":"onCOaIS5q4Pv.dR4lzdhvr.rVMDvz4Ro","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":160},"rootRelativePath":"assets/2287621b-af64-42c3-9bc9-967e77e77a74.png"},"63b9c29c-b6b5-4fee-b4c4-7211c139f748":{"name":"ElonMuskV2LIdle","sourceUrl":null,"frameSize":{"x":65,"y":160},"frameCount":2,"looping":true,"frameDelay":12,"version":"PhWrFro9oWDt3snWak.BmCQKHcG7T5yP","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":160},"rootRelativePath":"assets/63b9c29c-b6b5-4fee-b4c4-7211c139f748.png"},"f52a8262-6bcb-4d2e-a3b5-a8dc240d42cf":{"name":"ElonMuskV2LRun","sourceUrl":null,"frameSize":{"x":65,"y":160},"frameCount":2,"looping":true,"frameDelay":15,"version":"NwrcPyfuqkKNd8ZZ138ZF4dEiVzBrbSU","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":160},"rootRelativePath":"assets/f52a8262-6bcb-4d2e-a3b5-a8dc240d42cf.png"},"fc41a982-acfc-441b-9acb-46c658311f1e":{"name":"ElonMuskV2RRun","sourceUrl":null,"frameSize":{"x":65,"y":160},"frameCount":2,"looping":true,"frameDelay":12,"version":"qGDV0cyEDwYT7f_5vvv9h_URhH1NnQds","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":160},"rootRelativePath":"assets/fc41a982-acfc-441b-9acb-46c658311f1e.png"},"94c7115b-6725-4bf8-8e88-0d89f114bb1f":{"name":"ElonMuskLRun","sourceUrl":null,"frameSize":{"x":65,"y":160},"frameCount":2,"looping":true,"frameDelay":4,"version":"F81d.8987zT.NDJt0744iJCvf1MiVjpm","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":160},"rootRelativePath":"assets/94c7115b-6725-4bf8-8e88-0d89f114bb1f.png"},"ba306a80-c857-49e9-a692-e03667ed0b9b":{"name":"ElonMuskROw","sourceUrl":null,"frameSize":{"x":81,"y":160},"frameCount":3,"looping":false,"frameDelay":12,"version":".JaTwiNErWkxmtnBx6i2IrOZrDDCC2vD","loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":320},"rootRelativePath":"assets/ba306a80-c857-49e9-a692-e03667ed0b9b.png"},"e3c96557-2840-4ec6-960e-158f627ddb8b":{"name":"ElonMuskV2Ow","sourceUrl":null,"frameSize":{"x":81,"y":160},"frameCount":3,"looping":false,"frameDelay":12,"version":"kdGQYyzaSqv_x11xJPPwqN_1B2VVzl6h","loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":320},"rootRelativePath":"assets/e3c96557-2840-4ec6-960e-158f627ddb8b.png"},"3f2809fd-b58d-4ceb-bfa6-db0806aeb0a9":{"name":"CybertruckL","sourceUrl":null,"frameSize":{"x":203,"y":68},"frameCount":3,"looping":true,"frameDelay":1,"version":"h5iNsfpm02phcTAl.reBjZ1vMvMadCPA","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":203,"y":204},"rootRelativePath":"assets/3f2809fd-b58d-4ceb-bfa6-db0806aeb0a9.png"},"aae8f584-cf04-483f-9970-5cc9a62b3ae0":{"name":"CybertruckR","sourceUrl":null,"frameSize":{"x":203,"y":68},"frameCount":3,"looping":true,"frameDelay":1,"version":"L2ztiV4mdjRzuOgeBos7iBTNJ24Te1e6","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":203,"y":204},"rootRelativePath":"assets/aae8f584-cf04-483f-9970-5cc9a62b3ae0.png"},"21cd5689-fe4e-4bd4-9276-c99be0723b84":{"name":"FireL","sourceUrl":null,"frameSize":{"x":153,"y":27},"frameCount":4,"looping":true,"frameDelay":1,"version":"fTX6VtCxvtmKL2QHjnAZ8dpNCTErjdQR","loadedFromSource":true,"saved":true,"sourceSize":{"x":153,"y":108},"rootRelativePath":"assets/21cd5689-fe4e-4bd4-9276-c99be0723b84.png"},"09e32a81-b705-417a-b894-486be528986b":{"name":"FireR","sourceUrl":null,"frameSize":{"x":153,"y":27},"frameCount":4,"looping":true,"frameDelay":12,"version":"U1g112seAoWZayZ9rAxFYHUdz_TC_vnE","loadedFromSource":true,"saved":true,"sourceSize":{"x":153,"y":108},"rootRelativePath":"assets/09e32a81-b705-417a-b894-486be528986b.png"},"7f991113-c138-4440-9287-b25228b55b87":{"name":"JDFinalTemplate","sourceUrl":null,"frameSize":{"x":173,"y":158},"frameCount":1,"looping":true,"frameDelay":12,"version":"wBN2SWol4GrGWYnXfNVVpWVu3PKuoE2U","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":173,"y":158},"rootRelativePath":"assets/7f991113-c138-4440-9287-b25228b55b87.png"},"990012c6-db7a-47ac-95cd-2addcaa4c785":{"name":"JDBody","sourceUrl":null,"frameSize":{"x":89,"y":129},"frameCount":1,"looping":true,"frameDelay":12,"version":"VoFIDcgw56L6BeXMet8mP2FNen5gynrJ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":89,"y":129},"rootRelativePath":"assets/990012c6-db7a-47ac-95cd-2addcaa4c785.png"},"7a3b8177-8b09-496c-9057-3f7bc7efc82d":{"name":"JDFullBody","sourceUrl":null,"frameSize":{"x":99,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"x7kZ_0kTJXp1Ieh3fsevCXBM7pO.L5bO","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":131},"rootRelativePath":"assets/7a3b8177-8b09-496c-9057-3f7bc7efc82d.png"},"b9d97074-2105-4423-a604-b3faadbc353f":{"name":"JDSplash","sourceUrl":null,"frameSize":{"x":150,"y":199},"frameCount":12,"looping":false,"frameDelay":15,"version":"pJKO94NFfM1KTcD8O6N6r_YbGVKsPHEj","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":597},"rootRelativePath":"assets/b9d97074-2105-4423-a604-b3faadbc353f.png"},"60fef605-d220-48d5-8104-32daea66097f":{"name":"JDSplashParticles","sourceUrl":null,"frameSize":{"x":130,"y":70},"frameCount":4,"looping":false,"frameDelay":1,"version":"X5ZNVgGQQg5cQDJPcWBMD1rz0gtRtXlf","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":280},"rootRelativePath":"assets/60fef605-d220-48d5-8104-32daea66097f.png"},"e945579f-b4e9-4a5f-a896-2f4b210929ff":{"name":"JDBlink","sourceUrl":null,"frameSize":{"x":99,"y":131},"frameCount":7,"looping":false,"frameDelay":3,"version":"dc5N1paSlb2dWH27uBjvhIxYh0e_R7d4","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":297,"y":393},"rootRelativePath":"assets/e945579f-b4e9-4a5f-a896-2f4b210929ff.png"},"b69fee89-ba7e-4fac-9c69-1adf62973735":{"name":"JDRoar","sourceUrl":null,"frameSize":{"x":99,"y":131},"frameCount":11,"looping":false,"frameDelay":2,"version":"DrOaa3hfEOPTiYQzqgjAZrWdteCTTBWQ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":393},"rootRelativePath":"assets/b69fee89-ba7e-4fac-9c69-1adf62973735.png"},"d78a2a03-e8a5-4c52-a3e9-3a0749eb7e4b":{"name":"Couch","sourceUrl":null,"frameSize":{"x":100,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"3FYFQ1QIeThfEMKPe5gk9MAJ9LuHANeb","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":45},"rootRelativePath":"assets/d78a2a03-e8a5-4c52-a3e9-3a0749eb7e4b.png"},"e78e3074-8193-42b7-ac3e-16e52125217a":{"name":"FlyingCouch","sourceUrl":null,"frameSize":{"x":45,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"lHBnYSGeatfmSYbmAOUIDjHMIzzDDY16","loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":100},"rootRelativePath":"assets/e78e3074-8193-42b7-ac3e-16e52125217a.png"},"56c325f9-35f5-4116-a034-b760975121c4":{"name":"Couch Broken","sourceUrl":null,"frameSize":{"x":100,"y":45},"frameCount":5,"looping":false,"frameDelay":12,"version":"jl.Qr7KJwydnayr4y9.327kzvpf3Cuts","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":135},"rootRelativePath":"assets/56c325f9-35f5-4116-a034-b760975121c4.png"},"3009e21f-3480-44f2-9da7-4a60c16c6836":{"name":"JDLegs","sourceUrl":null,"frameSize":{"x":173,"y":86},"frameCount":1,"looping":true,"frameDelay":12,"version":"upS2SPIsn2bvFXD8JQgVCZzZGvNMPsHx","loadedFromSource":true,"saved":true,"sourceSize":{"x":173,"y":86},"rootRelativePath":"assets/3009e21f-3480-44f2-9da7-4a60c16c6836.png"},"13a1043a-a3d5-450a-b93c-fec0f2686630":{"name":"JDLeft","sourceUrl":null,"frameSize":{"x":173,"y":86},"frameCount":6,"looping":true,"frameDelay":4,"version":"JjWoRqupvGR6CKYzoN_Qvtd8VHybEh3O","loadedFromSource":true,"saved":true,"sourceSize":{"x":346,"y":258},"rootRelativePath":"assets/13a1043a-a3d5-450a-b93c-fec0f2686630.png"},"8208535b-dc80-4242-a793-625be3414270":{"name":"JDRight","sourceUrl":null,"frameSize":{"x":173,"y":86},"frameCount":6,"looping":true,"frameDelay":4,"version":"wvjpa.erYdjLyF4C7rER73ZQWaPrvPsZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":346,"y":258},"rootRelativePath":"assets/8208535b-dc80-4242-a793-625be3414270.png"},"b1bb9a9e-f9cb-4184-bc65-3ef0f8f5dce5":{"name":"JDArmSegments","sourceUrl":null,"frameSize":{"x":16,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"dHdPYuXcWdhhh7IqwKkLFQly0ZKUg.tO","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":17},"rootRelativePath":"assets/b1bb9a9e-f9cb-4184-bc65-3ef0f8f5dce5.png"},"7092fb53-4a0c-4fb4-9225-d12e5dc8812d":{"name":"JDLHand","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":2,"looping":true,"frameDelay":12,"version":"Voz0Obv5ZuKZmSISl6oosBlPF412a7Y9","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":40},"rootRelativePath":"assets/7092fb53-4a0c-4fb4-9225-d12e5dc8812d.png"},"be8b9136-4edc-4b8f-a357-dddd0fb54e76":{"name":"JDRHand","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":2,"looping":true,"frameDelay":12,"version":"wNVBJuFb8XAOYhKu5KdTj8ZsCR5UQ_Ig","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":40},"rootRelativePath":"assets/be8b9136-4edc-4b8f-a357-dddd0fb54e76.png"},"37668914-3eae-4bcd-8b13-69f859e5e1cf":{"name":"Bullet","sourceUrl":null,"frameSize":{"x":29,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"vTx1DxLd57UFMATxLyW3VATNBaT6B6AO","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":12},"rootRelativePath":"assets/37668914-3eae-4bcd-8b13-69f859e5e1cf.png"},"a0c438e5-f972-4721-8055-d3344ea179f8":{"name":"Laser","sourceUrl":null,"frameSize":{"x":100,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"C0cYDYJAyXqDHk61Ff90ZO2fTqMV.fwm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":27},"rootRelativePath":"assets/a0c438e5-f972-4721-8055-d3344ea179f8.png"},"486b3275-384b-408a-966a-6ae1d6a89ac1":{"name":"DTHead","sourceUrl":null,"frameSize":{"x":35,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":".Zh8qGKrxdi4_9wAGID9vEGbLWd2_1_3","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":44},"rootRelativePath":"assets/486b3275-384b-408a-966a-6ae1d6a89ac1.png"},"3635c3d0-b374-48f3-96b9-afec305684dc":{"name":"OrangBody","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"SozKpAirmxd_GqviXOpvEdxkBI8UMVe0","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/3635c3d0-b374-48f3-96b9-afec305684dc.png"},"f9d1bfa7-8ba2-4171-af10-f628c1dceec2":{"name":"OrangHead","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"xE.aorg19M5qZiNUy3bFI3oz_LE1j.IQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/f9d1bfa7-8ba2-4171-af10-f628c1dceec2.png"},"9930865f-c54b-4c97-9d8d-cdcce9ca3298":{"name":"DTOrangutanIdle","sourceUrl":null,"frameSize":{"x":274,"y":328},"frameCount":3,"looping":true,"frameDelay":4,"version":"_Y6V_3uqoJqgHi5_4pEfX9bXIK1lGJV6","loadedFromSource":true,"saved":true,"sourceSize":{"x":548,"y":656},"rootRelativePath":"assets/9930865f-c54b-4c97-9d8d-cdcce9ca3298.png"},"8aa6e9cd-38f3-46b9-b686-00d650a24f3a":{"name":"DTOrangutanTemplate","sourceUrl":null,"frameSize":{"x":274,"y":328},"frameCount":1,"looping":true,"frameDelay":10,"version":"dTJDcWCIY5Ymt5RzVvSbHUL9M86GyALA","loadedFromSource":true,"saved":true,"sourceSize":{"x":274,"y":328},"rootRelativePath":"assets/8aa6e9cd-38f3-46b9-b686-00d650a24f3a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Start = false;
var StartText = 0;
var ColorChange = 0;
var cheatCode = 0;
var Easy = false;
var Normal = false;
var Hard = false;
function StartScreenAnim() {
  if (StartText>=1) {
    //ICE
    fill("yellow");
    textSize(40);
    textAlign(CENTER, TOP);
    text("I", 40, 100);
    if (StartText>=2) {
      fill("yellow");
      textSize(40);
      textAlign(CENTER, TOP);
      text("C", 60, 100);
      if (StartText>=3) {
        fill("yellow");
        textSize(40);
        textAlign(CENTER, TOP);
        text("E", 90, 100);
        if (StartText>=4) {
          //DEFENSE:
          fill("yellow");
          textSize(40);
          textAlign(CENTER, TOP);
          text("D", 180, 100);
          if (StartText>=5) {
            fill("yellow");
            textSize(40);
            textAlign(CENTER, TOP);
            text("E", 210, 100);
            if (StartText>=6) {
              fill("yellow");
              textSize(40);
              textAlign(CENTER, TOP);
              text("F", 240, 100);
              if (StartText>=7) {
                fill("yellow");
                textSize(40);
                textAlign(CENTER, TOP);
                text("E", 270, 100);
                if (StartText>=8) {
                  fill("yellow");
                  textSize(40);
                  textAlign(CENTER, TOP);
                  text("N", 300, 100);
                  if (StartText>=9) {
                    fill("yellow");
                    textSize(40);
                    textAlign(CENTER, TOP);
                    text("S", 330, 100);
                    if (StartText>=10) {
                      fill("yellow");
                      textSize(40);
                      textAlign(CENTER, TOP);
                      text("E:", 360, 100);
                      if (StartText>=11) {
                        //MINNEAPOLIS
                        fill("yellow");
                        textSize(30);
                        textAlign(CENTER, TOP);
                        text("M", 100, 200);
                        if (StartText>=12) {
                          fill("yellow");
                          textSize(30);
                          textAlign(CENTER, TOP);
                          text("I", 125, 200);
                          if (StartText>=13) {
                            fill("yellow");
                            textSize(30);
                            textAlign(CENTER, TOP);
                            text("N", 145, 200);
                            if (StartText>=14) {
                              fill("yellow");
                              textSize(30);
                              textAlign(CENTER, TOP);
                              text("N", 170, 200);
                              if (StartText>=15) {
                                fill("yellow");
                                textSize(30);
                                textAlign(CENTER, TOP);
                                text("E", 200, 200);
                                if (StartText>=16) {
                                  textSize(30);
                                  textAlign(CENTER, TOP);
                                  text("A", 225, 200);
                                  if (StartText>=17) {
                                    textSize(30);
                                    textAlign(CENTER, TOP);
                                    text("P", 250, 200);
                                    if (StartText>=18) {
                                      textSize(30);
                                      textAlign(CENTER, TOP);
                                      text("O", 275, 200);
                                      if (StartText>=19) {
                                        textSize(30);
                                        textAlign(CENTER, TOP);
                                        text("L", 300, 200);
                                        if (StartText>=20) {
                                          textSize(30);
                                          textAlign(CENTER, TOP);
                                          text("I", 320, 200);
                                          if (StartText>=21) {
                                            textSize(30);
                                            textAlign(CENTER, TOP);
                                            text("S", 335, 200);
                                            if (StartText>=25) {
                                              ColorChange = randomNumber(0, 1);
                                              if (ColorChange==0) {
                                                fill("yellow");
                                              } else {
                                                if (ColorChange==1) {
                                                  fill("red");
                                                }
                                              }
                                              textSize(35);
                                              textAlign(CENTER, TOP);
                                              text("Press Spacebar To Start", 200, 50);
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (StartText<=25) {
      console.log(cheatCode);
      if (cheatCode==0) {
        if (keyWentDown("up")) {
          cheatCode = cheatCode+1;
        }
      } else if (cheatCode==1) {
        if (keyWentDown("up")) {
          cheatCode = cheatCode+1;
        }
      } else if (cheatCode==2) {
        if (keyWentDown("down")) {
          cheatCode = cheatCode+1;
        }
      } else if (cheatCode==3) {
        if (keyWentDown("down")) {
          cheatCode = cheatCode+1;
        }
      } else if (cheatCode==4) {
        if (keyWentDown("left")) {
          cheatCode = cheatCode+1;
        }
      } else if (cheatCode==5) {
        if (keyWentDown("right")) {
          cheatCode = cheatCode+1;
        }
      } else if (cheatCode==6) {
        if (keyWentDown("left")) {
          cheatCode = cheatCode+1;
        }
      } else if (cheatCode==7) {
        if (keyWentDown("right")) {
          cheatCode = cheatCode+1;
        }
      } else if (cheatCode==8) {
        if (keyWentDown("z")) {
          cheatCode = cheatCode+1;
        }
      } else if (cheatCode==9) {
        if (keyWentDown("x")) {
          cheatCode = cheatCode+1;
        }
      } else if (cheatCode==10) {
        if (keyWentDown("space")) {
          cheatCode = cheatCode+1;
        }
      }
    }
  }
}
//Sprites
var StartStoryBG = createSprite(200, 200);
StartStoryBG.setAnimation("StartStoryBG");
StartStoryBG.visible = false;
var c1 = createSprite(200, -30);
c1.setAnimation("cloud");
c1.visible = false;
c1.velocityX = 1;
var c2 = createSprite(200, -30);
c2.setAnimation("cloud2");
c2.visible = false;
c2.velocityX = 1;
var couch = createSprite(200, 1000);
couch.setAnimation("Couch");
var p = createSprite(180, 200);
p.setAnimation("PlayerRIdle");
p.setCollider("rectangle", -2, 0, 15, 70);
p.visible = false;
var gV = createSprite(200, 200);
gV.setAnimation("GregoryBovinoCutscene");
gV.pause();
gV.setFrame(0);
gV.visible = false;
var gVE = createSprite(1000, 500);
gVE.setAnimation("GregoryBovinoLIdle");
gVE.visible = false;
gVE.scale = 0.8;
var ICE = createSprite(380, 200);
ICE.setAnimation("IceLSide");
ICE.visible = false;
var ICE2 = createSprite(-10, 200);
ICE2.setAnimation("IceLSide");
ICE2.visible = false;
var Elon = createSprite(200, 150);
Elon.setAnimation("ElonMuskLIdle");
Elon.scale = 0.8;
Elon.x = 1000;
var Cybertruck = createSprite(200, 200);
Cybertruck.setAnimation("CybertruckL");
Cybertruck.scale = 1;
Cybertruck.x = 1000;
var JDBody = createSprite(200, 1000);
JDBody.setAnimation("JDFullBody");
JDBody.scale = 2;
JDBody.setCollider("circle", 3, 35, 30);
var JDLegs = createSprite(200, 1000);
JDLegs.setAnimation("JDLegs");
JDLegs.scale = 2;
var JDLA1 = createSprite(0, 1000);
JDLA1.setAnimation("JDArmSegments");
JDLA1.scale = 1.5;
var JDLA2 = createSprite(0, 1000);
JDLA2.setAnimation("JDArmSegments");
JDLA2.scale = 1.5;
var JDLA3 = createSprite(0, 1000);
JDLA3.setAnimation("JDArmSegments");
JDLA3.scale = 1.5;
var JDLA4 = createSprite(0, 1000);
JDLA4.setAnimation("JDArmSegments");
JDLA4.scale = 1.5;
var JDLH = createSprite(0, 1000);
JDLH.setAnimation("JDLHand");
JDLH.scale = 1.5;
var JDRA1 = createSprite(0, 1000);
JDRA1.setAnimation("JDArmSegments");
JDRA1.scale = 1.5;
var JDRA2 = createSprite(0, 1000);
JDRA2.setAnimation("JDArmSegments");
JDRA2.scale = 1.5;
var JDRA3 = createSprite(0, 1000);
JDRA3.setAnimation("JDArmSegments");
JDRA3.scale = 1.5;
var JDRA4 = createSprite(0, 1000);
JDRA4.setAnimation("JDArmSegments");
JDRA4.scale = 1.5;
var JDRH = createSprite(0, 1000);
JDRH.setAnimation("JDRHand");
JDRH.scale = 1.5;
var StartMenu = createSprite(200, 200);
StartMenu.setAnimation("StartMenuBG");
var ceiling = createSprite(200, 214);
ceiling.setAnimation("Ceiling");
ceiling.width = 400;
ceiling.visible = false;
var walls = createGroup();
var LWall = createSprite(-20, 200);
LWall.setAnimation("Ceiling");
LWall.width = 10;
LWall.height = 1000;
LWall.visible = false;
walls.add(LWall);
var RWall = createSprite(420, 200);
RWall.setAnimation("Ceiling");
RWall.width = 10;
RWall.height = 1000;
RWall.visible = false;
walls.add(RWall);
var bossHealthHolder = createSprite(280, 50);
bossHealthHolder.setAnimation("StartMenuBG");
bossHealthHolder.height = 35;
bossHealthHolder.width = 220;
bossHealthHolder.visible = false;
var GBBossHealth = createSprite(280, 50);
GBBossHealth.setAnimation("Laser");
GBBossHealth.height = 30;
GBBossHealth.visible = false;
var ElonBossHealth = createSprite(280, 50);
ElonBossHealth.setAnimation("Laser");
ElonBossHealth.height = 30;
ElonBossHealth.visible = false;
var JDBossHealth = createSprite(280, 50);
JDBossHealth.setAnimation("Laser");
JDBossHealth.height = 30;
JDBossHealth.visible = false;
var difficultyLevelsChoose = 2;
var difficultyLevels = createSprite(220, 350);
difficultyLevels.scale = 0.5;
//Story Intro
var ifStoryDone = 0;
var storyStages = 0;
var timer = 0;
function StartStoryAnim() {
  timer = timer + 0.1;
  drawSprites();
  if (storyStages == 0) {
    StartStoryBG.visible = true;
    p.visible = true;
    p.velocityX = 1;
    p.velocityY = 1.5;
    if (timer > 5) {
      if (timer < 8) {
        p.velocityX = 0;
        p.velocityY = 0;
        timer = 0;
        storyStages = 1;
      }
    }
  } 
  else if (storyStages == 1) { 
    ICE2.visible = true;
    ICE.visible = true;
    ICE.setAnimation("IceLWalk");
    ICE.velocityY = 1;
    if (timer > 8) {
      if (timer < 10) {
        ICE.velocityX = 0;
        ICE.velocityY = 0;
        timer = 0;
        storyStages = 2;
      }
    }
  } 
  else if (storyStages == 2) { 
    if (timer < 15) {
      ICE.setAnimation("IceLSide");
      fill("black");
      textSize(20);
      text("I am going to beat you up now.", 300, 100, 100, 200);
    }
    if (timer > 15) {
      p.setAnimation("StartAnim");
      ICE.setAnimation("IceLWalk");
      ICE.velocityX = -1;
      if (p.isTouching(ICE)) {
        storyStages = 3;
      }
    }
  } 
  else if (storyStages == 3) { 
    p.setAnimation("PlayerRPunch");
    ICE.setAnimation("IceLSide");
    ICE.velocityX = 0;
    if (timer < 27) {
      playSound("assets/pPunch.mp3", false);
    }
    if (timer > 30) {
      ICE.rotation = 90;
      ICE.y = ICE.y + 30;
      timer = 0;
      storyStages = 4;
    }
  } 
  else if (storyStages == 4) { 
    p.setAnimation("PlayerRIdle");
    if (timer > 10) {
      fill("black");
      textSize(25);
      text("That Went Well", p.x - 30, p.y - 80);
    }
    if (timer > 20) {
      StartMenu.visible = true;
      if (timer > 23) {
        storyStages = 5;
        ifStoryDone = 1;
        ICE.rotation = 0;
        stageNum = 1;
        cheatCodeHP();
        stageScreen();
        if (stageNum < 5.5) {
          playSound("assets/ICEDefenseStages1-5.mp3", true);
        } else if ((stageNum == 6)) {
          playSound("assets/G.B.mp3", true);
        } else if ((stageNum == 7)) {
          playSound("assets/G.B.mp3", true);
        }
      }
    }
  }
}
//Stage Counter
var stageNum = 0;
function stageScreen() {
  StartMenu.visible = true;
  pHPBar.visible = false;
  StartMenu.x = camera.x;
  StartMenu.y = camera.y;
  drawSprites();
  fill("yellow");
  textAlign(CENTER, TOP);
  textSize(40);
  text("Stage" , camera.x, camera.y-25);
  fill("yellow");
  textAlign(CENTER, TOP);
  textSize(40);
  text(stageNum, camera.x, camera.y+25);
}
//How long the stage screen is on
var stageScreenTimer = 0;
function stageScreenTime() {
  if (StartMenu.visible==false) {
    stageScreenTimer = 0;
  }
  if (StartMenu.visible==true) {
    stageScreenTimer = stageScreenTimer+0.1;
    if (stageScreenTimer>=10) {
      pHPBar.visible = true;
      StartMenu.visible = false;
      drawSprites();
    }
  }
}
//Stages
function stage1() {
  if (stageNum==1) {
    if (pHealth>0) {
      if (StartMenu.visible == false) {
        background("white");
        StartStoryBG.setAnimation("StartStoryBG");
        StartStoryBG.scale = 0.8;
        StartStoryBG.width = 500;
        if (iceGotHit<15) {
          ICEAIHoriz();
          ICEAIVert();
          icePunch();
          playerHit();
        }
        pMove();
        iceClose();
        pPunch();
        pPunchUlt();
        pGotPunched();
        iceDead();
        drawSprites();
        pHealthBar();
        if (ICE.y>429) {
          iceGotHit = 0;
          ICE.x = 430;
          ICE.y = 200;
          ICE.rotation = 0;
          p.x = 200;
          p.y = 300;
          ceiling.y = 240;
          p.velocityY = 0;
          p.velocityX = 0;
          pHealth = pHealth+stageNum;
          ICE.setVelocity(0, 0);
          stageNum = 2;
          stageScreenTime();
          stageScreen();
        }
      } else if (StartMenu.visible == true) {
        console.clear();
      }
    }
  }
}
function stage2() {
  if (stageNum==2) {
    if (pHealth>0) {
      if (StartMenu.visible == false) {
        background("white");
        StartStoryBG.setAnimation("Stage2");
        StartStoryBG.scale = 1;
        if (iceGotHit<15) {
          ICEAIHoriz();
          ICEAIVert();
          icePunch();
          playerHit();
        }
        pMove();
        iceClose();
        pPunch();
        pPunchUlt();
        pGotPunched();
        iceDead();
        drawSprites();
        pHealthBar();
        if (ICE.y>429) {
          iceGotHit = 0;
          ICE.x = 430;
          ICE.y = 200;
          ICE.rotation = 0;
          ICE2.x = -30;
          ICE2.y = 200;
          ICE2.rotation = 0;
          p.x = 200;
          p.y = 300;
          ceiling.y = 240;
          p.velocityY = 0;
          p.velocityX = 0;
          pHealth = pHealth+stageNum;
          ICE.setVelocity(0, 0);
          stageNum = 3;
          stageScreenTime();
          stageScreen();
        }
      }
    }
  }
}
function stage3() {
  if (stageNum==3) {
    if (pHealth>0) {
      if (StartMenu.visible == false) {
        background("white");
        StartStoryBG.setAnimation("Stage2");
        StartStoryBG.scale = 1;
        ICE2.visible = true;
        if (iceGotHit<15) {
          ICEAIHoriz();
          ICEAIVert();
          icePunch();
          playerHit();
        }
        if (iceGotHit2<15) {
          ICEAIHoriz2();
          ICEAIVert2();
          icePunch2();
          playerHit();
        }
        pMove();
        iceClose();
        pPunch();
        pPunchUlt();
        pGotPunched();
        iceDead();
        iceDead2();
        drawSprites();
        pHealthBar();
        if (ICE.y>429 && ICE2.y>429) {
            iceGotHit = 0;
            iceGotHit2 = 0;
            ICE.x = 430;
            ICE.y = 200;
            ICE.rotation = 0;
            ICE2.x = -30;
            ICE2.y = 200;
            ICE2.rotation = 0;
            p.x = 200;
            p.y = 300;
            ceiling.y = 145;
            p.velocityY = 0;
            p.velocityX = 0;
            pHealth = pHealth+stageNum;
            ICE.setVelocity(0, 0);
            ICE2.setVelocity(0, 0);
            stageNum = 4;
            stageScreenTime();
            stageScreen();
        }
      }
    }
  }
}
function stage4() {
  if (stageNum==4) {
    if (pHealth>0) {
      if (StartMenu.visible == false) {
        background("white");
        StartStoryBG.setAnimation("Stage4");
        StartStoryBG.scale = 1;
        if (iceGotHit<15) {
          ICEAIHoriz();
          ICEAIVert();
          icePunch();
          playerHit();
        }
        if (iceGotHit2<15) {
          ICEAIHoriz2();
          ICEAIVert2();
          icePunch2();
          playerHit();
        }
        pMove();
        iceClose();
        pPunch();
        pPunchUlt();
        pGotPunched();
        iceDead();
        iceDead2();
        drawSprites();
        pHealthBar();
        if (ICE.y>430) {
          if (ICE2.y>430) {
            iceGotHit = 0;
            iceGotHit2 = 0;
            ICE.x = 430;
            ICE.y = 200;
            ICE.rotation = 0;
            ICE2.x = 0;
            ICE2.y = 400;
            ICE2.rotation = 0;
            p.x = 200;
            p.y = 300;
            ceiling.y = 145;
            p.velocityY = 0;
            p.velocityX = 0;
            pHealth = pHealth+stageNum;
            ICE.setVelocity(0, 0);
            ICE2.setVelocity(0, 0);
            stageNum = 5;
            stageScreenTime();
            stageScreen();
          }
        }
      }
    }
  }
}
var pCapsule = createSprite(1000, 200);
pCapsule.setAnimation("PCapsule");
function stage5() {
  if (stageNum==5) {
    if (pHealth>0) {
      if (StartMenu.visible == false) {
        background("white");
        StartStoryBG.setAnimation("Stage4");
        StartStoryBG.scale = 1;
        if (iceGotHit<15) {
          ICEAIHoriz();
          ICEAIVert();
          icePunch();
          playerHit();
        }
        if (iceGotHit2<15) {
          ICEAIHoriz2();
          ICEAIVert2();
          icePunch2();
          playerHit();
        }
        pMove();
        iceClose();
        pPunch();
        pPunchUlt();
        vroomVroom();
        pGotPunched();
        iceDead();
        iceDead2();
        drawSprites();
        pHealthBar();
        if (ICE.y>430 && ICE2.y>430) {
            stopSound("assets/ICEDefenseStages1-5.mp3");
            pCapsule.x = 380;
            pCapsule.y = 50;
            car.x = 1000;
            ceiling.y = 145;
            ICE.setVelocity(0, 0);
            ICE2.setVelocity(0, 0);
            pCapsuleTouch();
        }
      }
    }
  }
}
function pCapsuleTouch() {
  if (p.isTouching(pCapsule)) {
    pHealth = pHealth+40;
    pCapsule.x = 1000;
    iceGotHit = 0;
    iceGotHit2 = 0;
    ICE.x = 1000;
    ICE.y = 0;
    ICE.rotation = 0;
    ICE2.x = 1000;
    ICE2.y = 0;
    ICE2.rotation = 0;
    ICE2.destroy();
    p.x = 200;
    p.y = 300;
    p.velocityY = 0;
    p.velocityX = 0;
    ceiling.y = 145;
    ICE.velocityY = 0;
    ICE2.velocityY = 0;
    stageNum = 5.5;
  }
}
var gVtalkTimer = 0;
function gVtalk() {
  if (gV.visible==true) {
    pHPBar.visible = false;
    if (gVtalkTimer>=2) {
      if (gVtalkTimer<=30) {
        stroke("yellow");
        textAlign(CENTER, TOP);
        textSize(20);
        text("S", 20, 300);
        if (gVtalkTimer<=2.8) {
          playSound("assets/Talking.mp3", false);
        }
        if (gVtalkTimer>=3) {
          stroke("yellow");
          textAlign(CENTER, TOP);
          textSize(20);
          text("T", 40, 300);
          if (gVtalkTimer<=3.8) {
            playSound("assets/Talking.mp3", false);
          }
          if (gVtalkTimer>=4) {
            stroke("yellow");
            textAlign(CENTER, TOP);
            textSize(20);
            text("O", 60, 300);
            if (gVtalkTimer<=4.8) {
              playSound("assets/Talking.mp3", false);
            }
            if (gVtalkTimer>=5) {
              stroke("yellow");
              textAlign(CENTER, TOP);
              textSize(20);
              text("P", 80, 300);
              if (gVtalkTimer<=5.8) {
                playSound("assets/Talking.mp3", false);
              }
            }
            if (gVtalkTimer>=6) {
              stroke("yellow");
              textAlign(CENTER, TOP);
              textSize(20);
              text("B", 120, 300);
              if (gVtalkTimer<=6.8) {
                playSound("assets/Talking.mp3", false);
              }
              if (gVtalkTimer>=7) {
                stroke("yellow");
                textAlign(CENTER, TOP);
                textSize(20);
                text("E", 140, 300);
                if (gVtalkTimer<=7.8) {
                  playSound("assets/Talking.mp3", false);
                }
                if (gVtalkTimer>=8) {
                  stroke("yellow");
                  textAlign(CENTER, TOP);
                  textSize(20);
                  text("A", 160, 300);
                  if (gVtalkTimer<=8.8) {
                    playSound("assets/Talking.mp3", false);
                  }
                  if (gVtalkTimer>=9) {
                    stroke("yellow");
                    textAlign(CENTER, TOP);
                    textSize(20);
                    text("T", 180, 300);
                    if (gVtalkTimer<=9.8) {
                      playSound("assets/Talking.mp3", false);
                    }
                    if (gVtalkTimer>=10) {
                      stroke("yellow");
                      textAlign(CENTER, TOP);
                      textSize(20);
                      text("I", 200, 300);
                      if (gVtalkTimer<=10.8) {
                        playSound("assets/Talking.mp3", false);
                      }
                      if (gVtalkTimer>=11) {
                        stroke("yellow");
                        textAlign(CENTER, TOP);
                        textSize(20);
                        text("N", 220, 300);
                        if (gVtalkTimer<=11.8) {
                          playSound("assets/Talking.mp3", false);
                        }
                        if (gVtalkTimer>=12) {
                          stroke("yellow");
                          textAlign(CENTER, TOP);
                          textSize(20);
                          text("G", 240, 300);
                          if (gVtalkTimer<=12.8) {
                            playSound("assets/Talking.mp3", false);
                          }
                          if (gVtalkTimer>=13) {
                            stroke("yellow");
                            textAlign(CENTER, TOP);
                            textSize(20);
                            text("U", 280, 300);
                            if (gVtalkTimer<=13.8) {
                              playSound("assets/Talking.mp3", false);
                            }
                            if (gVtalkTimer>=14) {
                              stroke("yellow");
                              textAlign(CENTER, TOP);
                              textSize(20);
                              text("P", 300, 300);
                              if (gVtalkTimer<=14.8) {
                                playSound("assets/Talking.mp3", false);
                              }
                              if (gVtalkTimer>=15) {
                                stroke("yellow");
                                textAlign(CENTER, TOP);
                                textSize(20);
                                text("M", 340, 300);
                                if (gVtalkTimer<=15.8) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                if (gVtalkTimer>=16) {
                                  stroke("yellow");
                                  textAlign(CENTER, TOP);
                                  textSize(20);
                                  text("Y", 360, 300);
                                  if (gVtalkTimer<=16.8) {
                                    playSound("assets/Talking.mp3", false);
                                  }
                                  if (gVtalkTimer>=17) {
                                    stroke("yellow");
                                    textAlign(CENTER, TOP);
                                    textSize(20);
                                    text("A", 160, 350);
                                    if (gVtalkTimer<=17.8) {
                                      playSound("assets/Talking.mp3", false);
                                    }
                                    if (gVtalkTimer>=18) {
                                      stroke("yellow");
                                      textAlign(CENTER, TOP);
                                      textSize(20);
                                      text("G", 180, 350);
                                      if (gVtalkTimer<=18.8) {
                                        playSound("assets/Talking.mp3", false);
                                      }
                                      if (gVtalkTimer>=19) {
                                        stroke("yellow");
                                        textAlign(CENTER, TOP);
                                        textSize(20);
                                        text("E", 200, 350);
                                        if (gVtalkTimer<=19.8) {
                                          playSound("assets/Talking.mp3", false);
                                        }
                                        if (gVtalkTimer>=20) {
                                          stroke("yellow");
                                          textAlign(CENTER, TOP);
                                          textSize(20);
                                          text("N", 220, 350);
                                          if (gVtalkTimer<=20.8) {
                                            playSound("assets/Talking.mp3", false);
                                          }
                                          if (gVtalkTimer>=21) {
                                            stroke("yellow");
                                            textAlign(CENTER, TOP);
                                            textSize(20);
                                            text("T", 240, 350);
                                            if (gVtalkTimer<=21.8) {
                                              playSound("assets/Talking.mp3", false);
                                            }
                                            if (gVtalkTimer>=22) {
                                              stroke("yellow");
                                              textAlign(CENTER, TOP);
                                              textSize(20);
                                              text("S!", 260, 350);
                                              if (gVtalkTimer<=22.8) {
                                                playSound("assets/Talking.mp3", false);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else if (gVtalkTimer>=30) {
        stroke("yellow");
        textAlign(CENTER, TOP);
        textSize(20);
        text("DO", 60, 300);
        if (gVtalkTimer<=30.8) {
          playSound("assets/Talking.mp3", false);
        }
        if (gVtalkTimer>=31) {
          stroke("yellow");
          textAlign(CENTER, TOP);
          textSize(20);
          text("I", 100, 300);
          if (gVtalkTimer<=31.8) {
            playSound("assets/Talking.mp3", false);
          }
          if (gVtalkTimer>=32) {
            stroke("yellow");
            textAlign(CENTER, TOP);
            textSize(20);
            text("NEED", 160, 300);
            if (gVtalkTimer<=32.8) {
              playSound("assets/Talking.mp3", false);
            }
            if (gVtalkTimer>=33) {
              stroke("yellow");
              textAlign(CENTER, TOP);
              textSize(20);
              text("TO", 220, 300);
              if (gVtalkTimer<=33.8) {
                playSound("assets/Talking.mp3", false);
              }
              if (gVtalkTimer>=34) {
                stroke("yellow");
                textAlign(CENTER, TOP);
                textSize(20);
                text("FIGHT", 280, 300);
                if (gVtalkTimer<=34.8) {
                  playSound("assets/Talking.mp3", false);
                }
                if (gVtalkTimer>=35) {
                  stroke("yellow");
                  textAlign(CENTER, TOP);
                  textSize(20);
                  text("YOU", 340, 300);
                  if (gVtalkTimer<=35.8) {
                    playSound("assets/Talking.mp3", false);
                  }
                  if (gVtalkTimer>=36) {
                    stroke("yellow");
                    textAlign(CENTER, TOP);
                    textSize(20);
                    text("MYSELF???!!!", 200, 350);
                    if (gVtalkTimer<=36.8) {
                      playSound("assets/Talking.mp3", false);
                    }
                    if (gVtalkTimer>=55) {
                      stageNum = 6;
                      gV.visible = false;
                      stageScreenTime();
                      stageScreen();
                      gVE.visible = true;
                      gVE.x = 400;
                      gVE.y = 180;
                      ceiling.y = 145;
                      playSound("assets/G.B.mp3", true);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function endStage5Cutscene() {
  if (stageNum==5.5) {
    if (pHealth>0) {
      if (StartMenu.visible == false) {
        background("black");
        gVtalkTimer = gVtalkTimer+0.2;
        gV.visible = true;
        gV.play();
        drawSprites();
        gVtalk();
      }
    }
  }
}
function stage6() {
  if (stageNum==6) {
    if (pHealth>0) {
      if (StartMenu.visible == false) {
        background("black");
        StartStoryBG.setAnimation("Stage4");
        StartStoryBG.scale = 1;
        bossHealthHolder.visible = true;
        GBBossHealth.visible = true;
        GBBossHealth.width = 220-gVEGotHit*4;
        if (gVJumpTime<gVRandom) {
          gVAIHoriz();
          gVAIVert();
          gVPunch();
          camera.x = 200;
        }
        gVJump();
        pMove();
        iceClose();
        pPunch();
        pPunchUlt();
        playerHit();
        pGotPunched();
        if (gVEGotHit>=35) {
          vroomVroom();
        }
        gVEDead();
        drawSprites();
        pHealthBar();
        if (gVE.y>500) {
          bossHealthHolder.visible = false;
          GBBossHealth.visible = false;
          car.setVelocity(0, 0);
          car.destroy();
          ICE.setVelocity(0, 0);
          ICE2.setVelocity(0, 0);
          gVE.setVelocity(0, 0);
          stopSound("assets/G.B.mp3");
          stageNum = 6.5;
        }
      }
    }
  }
}
var airplaneSky = createSprite(200, 200);
airplaneSky.setAnimation("airplaneBG");
airplaneSky.visible = false;
var airplane = createSprite(200, 200);
airplane.setAnimation("airplane");
airplane.visible = false;
airplane.width = 400;
var planemap = createSprite(200, 200);
planemap.setAnimation("Map");
planemap.visible = false;
planemap.pause();
planemap.setFrame(0);
var airplaneTime = 0;
function airplaneAnim() {
  if (stageNum==6.5) {
    airplaneTime = airplaneTime+0.05;
    if (airplaneTime>10) {
      if (airplaneTime<11) {
        airplane.velocityY = 1;
      }
    }
    if (airplaneTime>=11) {
      planemap.visible = false;
      planemap.destroy();
      if (airplaneTime<21) {
        airplaneSky.visible = true;
        airplane.visible = true;
        if (airplane.y>250) {
          airplane.velocityY = -1;
        } else if ((airplane.y<150)) {
          airplane.velocityY = 1.5;
        }
      }
    } else if ((airplaneTime<10)) {
      if (airplaneTime<2) {
        planemap.play();
      }
      planemap.visible = true;
    }
    drawSprites();
    if (airplane.y>500) {
      ICE.x = 430;
      ICE.y = 200;
      ICE.rotation = 0;
      gVE.x = 450;
      gVE.y = 200;
      gVE.rotation = 0;
      gVEGotHit = 0;
      p.x = 200;
      p.y = 300;
      ceiling.y = 145;
      p.velocityY = 0;
      p.velocityX = 0;
      pHealth = pHealth+stageNum+15.5;
      stageNum = 7;
      stageScreenTime();
      stageScreen();
      playSound("assets/G.B.mp3", true);
      iceGotHit = 0;
      iceGotHit2 = 0;
    }
  }
}
function stage7() {
  if (stageNum==7) {
    if (pHealth>0) {
      if (StartMenu.visible == false) {
        gVE.visible = true;
        background("white");
        StartStoryBG.setAnimation("WMStage7-9");
        bossHealthHolder.visible = true;
        bossHealthHolder.x = camera.x+95;
        bossHealthHolder.y = camera.y-170;
        GBBossHealth.visible = true;
        GBBossHealth.width = 220-gVEGotHit*4;
        GBBossHealth.x = camera.x+95;
        GBBossHealth.y = camera.y-170;
        gVE.visible = true;
        StartStoryBG.setAnimation("WMStage7-9");
        StartStoryBG.scale = 1;
        ceiling.y = 176;
        LWall.x = -250;
        RWall.x = 600;
        clouds();
        pCamera();
        if (iceGotHit<15) {
          ICEAIHoriz();
          ICEAIVert();
          icePunch();
          playerHit();
        }
        if (gVJumpTime<gVRandom) {
          gVAIHoriz();
          gVAIVert();
          gVPunch();
        }
        if (gVE.rotation==0) {
          gVJump();
        }
        pMove();
        iceClose();
        pPunch();
        pPunchUlt();
        pGotPunched();
        playerHit();
        iceDead();
        gVEDead();
        drawSprites();
        pHealthBar();
        if (ICE.y>430) {
          if (gVE.y>450) {
            bossHealthHolder.visible = false;
            GBBossHealth.visible = false;
            ceiling.y = 145;
            p.velocityY = 0;
            p.velocityX = 0;
            pHealth = pHealth+stageNum+20;
            p.x = 200;
            p.y = 200;
            camera.x = p.x;
            camera.y = p.y;
            iceGotHit = 0;
            iceGotHit2 = 0;
            stageNum = 7.5;
            stageScreenTime();
            stageScreen();
          }
        }
      } else {
        c1.x = -10;
        c1.visible = true;
      }
    }
  }
}
var ElonCutTime = 0;
function ElonCutscene() {
  ElonCutTime = ElonCutTime+0.05;
  if (ElonCutTime>5) {
    if (ElonCutTime<=10) {
      if (ElonCutTime<=6) {
        Cybertruck.x = p.x+200;
        camera.x = p.x;
        camera.y = p.y;
      }
      camera.x = camera.x+randomNumber(-1, 1);
      Cybertruck.velocityX = -1;
    }
  }
  if (Cybertruck.isTouching(p)) {
    p.x = p.x-50;
    p.y = p.y+100;
  }
  drawSprites();
  if (ElonCutTime>=11) {
    Cybertruck.velocityX = 0;
    if (ElonCutTime>=12) {
      Cybertruck.velocityX = -2;
      if (ElonCutTime<13) {
        Elon.x = Cybertruck.x+70;
      }
      if (ElonCutTime>=18) {
        if (ElonCutTime<21) {
          //You’re late.
          if (ElonCutTime<18.2) {
            playSound("assets/Talking.mp3", false);
          }
          textAlign(CENTER, TOP);
          textSize(20);
          fill("yellow");
          stroke("black");
          strokeWeight(5);
          text("Y", 20, 200);
          if (ElonCutTime>=18.2) {
            if (ElonCutTime<18.4) {
              playSound("assets/Talking.mp3", false);
            }
            textAlign(CENTER, TOP);
            textSize(20);
            fill("yellow");
            stroke("black");
            strokeWeight(5);
            text("O", 40, 200);
            if (ElonCutTime>=18.4) {
              if (ElonCutTime<18.6) {
                playSound("assets/Talking.mp3", false);
              }
              textAlign(CENTER, TOP);
              textSize(20);
              fill("yellow");
              stroke("black");
              strokeWeight(5);
              text("U", 60, 200);
              if (ElonCutTime>=18.6) {
                if (ElonCutTime<18.8) {
                  playSound("assets/Talking.mp3", false);
                }
                textAlign(CENTER, TOP);
                textSize(20);
                fill("yellow");
                stroke("black");
                strokeWeight(5);
                text("'", 80, 200);
                if (ElonCutTime>=18.8) {
                  if (ElonCutTime<19) {
                    playSound("assets/Talking.mp3", false);
                  }
                  textAlign(CENTER, TOP);
                  textSize(20);
                  fill("yellow");
                  stroke("black");
                  strokeWeight(5);
                  text("R", 100, 200);
                  if (ElonCutTime>=19) {
                    if (ElonCutTime<19.2) {
                      playSound("assets/Talking.mp3", false);
                    }
                    textAlign(CENTER, TOP);
                    textSize(20);
                    fill("yellow");
                    stroke("black");
                    strokeWeight(5);
                    text("E", 120, 200);
                    if (ElonCutTime>=19.2) {
                      if (ElonCutTime<19.4) {
                        playSound("assets/Talking.mp3", false);
                      }
                      textAlign(CENTER, TOP);
                      textSize(20);
                      fill("yellow");
                      stroke("black");
                      strokeWeight(5);
                      text("L", 160, 200);
                      if (ElonCutTime>=19.4) {
                        if (ElonCutTime<19.6) {
                          playSound("assets/Talking.mp3", false);
                        }
                        textAlign(CENTER, TOP);
                        textSize(20);
                        fill("yellow");
                        stroke("black");
                        strokeWeight(5);
                        text("A", 180, 200);
                        if (ElonCutTime>=19.8) {
                          if (ElonCutTime<20) {
                            playSound("assets/Talking.mp3", false);
                          }
                          textAlign(CENTER, TOP);
                          textSize(20);
                          fill("yellow");
                          stroke("black");
                          strokeWeight(5);
                          text("T", 200, 200);
                          if (ElonCutTime>=20) {
                            if (ElonCutTime<20.2) {
                              playSound("assets/Talking.mp3", false);
                            }
                            textAlign(CENTER, TOP);
                            textSize(20);
                            fill("yellow");
                            stroke("black");
                            strokeWeight(5);
                            text("E.", 220, 200);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        //You Will not beat up President Orangutan
        if (ElonCutTime<30) {
          if (ElonCutTime>=21.4) {
            if (ElonCutTime<21.6) {
              playSound("assets/Talking.mp3", false);
            }
            textAlign(CENTER, TOP);
            textSize(20);
            fill("yellow");
            stroke("black");
            strokeWeight(5);
            text("Y", 20, 200);
            if (ElonCutTime>=21.6) {
              if (ElonCutTime<21.8) {
                playSound("assets/Talking.mp3", false);
              }
              textAlign(CENTER, TOP);
              textSize(20);
              fill("yellow");
              stroke("black");
              strokeWeight(5);
              text("O", 40, 200);
              if (ElonCutTime>=22) {
                if (ElonCutTime<22.2) {
                  playSound("assets/Talking.mp3", false);
                }
                textAlign(CENTER, TOP);
                textSize(20);
                fill("yellow");
                stroke("black");
                strokeWeight(5);
                text("U", 60, 200);
                if (ElonCutTime>=22.2) {
                  if (ElonCutTime<22.4) {
                    playSound("assets/Talking.mp3", false);
                  }
                  textAlign(CENTER, TOP);
                  textSize(20);
                  fill("yellow");
                  stroke("black");
                  strokeWeight(5);
                  text("W", 120, 200);
                  if (ElonCutTime>=22.4) {
                    if (ElonCutTime<22.6) {
                      playSound("assets/Talking.mp3", false);
                    }
                    textAlign(CENTER, TOP);
                    textSize(20);
                    fill("yellow");
                    stroke("black");
                    strokeWeight(5);
                    text("I", 140, 200);
                    if (ElonCutTime>=22.6) {
                      if (ElonCutTime<22.8) {
                        playSound("assets/Talking.mp3", false);
                      }
                      textAlign(CENTER, TOP);
                      textSize(20);
                      fill("yellow");
                      stroke("black");
                      strokeWeight(5);
                      text("L", 160, 200);
                      if (ElonCutTime>=22.8) {
                        if (ElonCutTime<23) {
                          playSound("assets/Talking.mp3", false);
                        }
                        textAlign(CENTER, TOP);
                        textSize(20);
                        fill("yellow");
                        stroke("black");
                        strokeWeight(5);
                        text("L", 180, 200);
                        if (ElonCutTime>=23) {
                          if (ElonCutTime<23.2) {
                            playSound("assets/Talking.mp3", false);
                          }
                          textAlign(CENTER, TOP);
                          textSize(20);
                          fill("yellow");
                          stroke("black");
                          strokeWeight(5);
                          text("N", 220, 200);
                          if (ElonCutTime>=23.2) {
                            if (ElonCutTime<23.4) {
                              playSound("assets/Talking.mp3", false);
                            }
                            textAlign(CENTER, TOP);
                            textSize(20);
                            fill("yellow");
                            stroke("black");
                            strokeWeight(5);
                            text("O", 240, 200);
                            if (ElonCutTime>=23.4) {
                              if (ElonCutTime<23.6) {
                                playSound("assets/Talking.mp3", false);
                              }
                              textAlign(CENTER, TOP);
                              textSize(20);
                              fill("yellow");
                              stroke("black");
                              strokeWeight(5);
                              text("T", 260, 200);
                              if (ElonCutTime>=23.6) {
                                if (ElonCutTime<23.8) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("B", 300, 200);
                              }
                              if (ElonCutTime>=23.8) {
                                if (ElonCutTime<24) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("E", 320, 200);
                              }
                              if (ElonCutTime>=24) {
                                if (ElonCutTime<24.2) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("A", 340, 200);
                              }
                              if (ElonCutTime>=24.2) {
                                if (ElonCutTime<24.4) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("T", 360, 200);
                              }
                              if (ElonCutTime>=24.4) {
                                if (ElonCutTime<24.6) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("T", 20, 250);
                              }
                              if (ElonCutTime>=24.6) {
                                if (ElonCutTime<24.8) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("H", 40, 250);
                              }
                              if (ElonCutTime>=24.8) {
                                if (ElonCutTime<25) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("E", 60, 250);
                              }
                              if (ElonCutTime>=25) {
                                if (ElonCutTime<25.2) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("O", 100, 250);
                              }
                              if (ElonCutTime>=25.2) {
                                if (ElonCutTime<25.4) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("R", 120, 250);
                              }
                              if (ElonCutTime>=25.4) {
                                if (ElonCutTime<25.6) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("A", 140, 250);
                              }
                              if (ElonCutTime>=25.6) {
                                if (ElonCutTime<25.8) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("N", 160, 250);
                              }
                              if (ElonCutTime>=25.8) {
                                if (ElonCutTime<26) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("G", 180, 250);
                              }
                              if (ElonCutTime>=26) {
                                if (ElonCutTime<26.2) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("U", 200, 250);
                              }
                              if (ElonCutTime>=26.2) {
                                if (ElonCutTime<26.4) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("T", 220, 250);
                              }
                              if (ElonCutTime>=26.4) {
                                if (ElonCutTime<26.6) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("A", 240, 250);
                              }
                              if (ElonCutTime>=26.6) {
                                if (ElonCutTime<26.8) {
                                  playSound("assets/Talking.mp3", false);
                                }
                                textAlign(CENTER, TOP);
                                textSize(20);
                                fill("yellow");
                                stroke("black");
                                strokeWeight(5);
                                text("N", 260, 250);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else if ((ElonCutTime>=30)) {
          ceiling.y = 145;
          p.velocityY = 0;
          p.velocityX = 0;
          pHealth = pHealth+stageNum+0.5;
          p.x = 200;
          p.y = 200;
          camera.x = p.x;
          camera.y = p.y;
          iceGotHit = 0;
          iceGotHit2 = 0;
          elonGotHit = 0;
          stageNum = 8;
          gVE.destroy();
          ICE.destroy();
          stageScreenTime();
          stageScreen();
        }
      }
    }
  }
}
var ELoopDeb = false;
function stage8() {
  if (stageNum==8) {
    if (pHealth>0) {
      if (StartMenu.visible == false) {
        bossHealthHolder.visible = true;
        bossHealthHolder.x = camera.x+95;
        bossHealthHolder.y = camera.y-170;
        ElonBossHealth.visible = true;
        ElonBossHealth.x = camera.x+95;
        ElonBossHealth.y = camera.y-170;
        ElonBossHealth.width = 220-elonGotHit*4;
        if (ELoopDeb==false) {
          stopSound("StageE(2).mp3");
          playSound("StageELoop(1).mp3", true);
          ELoopDeb = true;
        }
        Elon.visible = true;
        background("white");
        StartStoryBG.setAnimation("WMStage7-9");
        StartStoryBG.scale = 1;
        ceiling.y = 176;
        LWall.x = -250;
        RWall.x = 600;
        if (elonGotHit<55) {
          fire.y = 600;
          if (Elon.velocityX>=-0.01) {
            if (Elon.velocityX<0.01) {
              fireShot();
              elonPunch();
            }
          }
          elonCyberAttack();
          elonAiMoveY();
          elonAiMoveX();
        }
        clouds();
        pCamera();
        pMove();
        iceClose();
        pPunch();
        pPunchUlt();
        pGotPunched();
        playerHit();
        ElonDead();
        drawSprites();
        pHealthBar();
        if (Elon.y>450) {
          ElonBossHealth.destroy();
          bossHealthHolder.visible = false;
          ceiling.y = 145;
          camera.x = p.x;
          camera.y = p.y;
          iceGotHit = 0;
          iceGotHit2 = 0;
          couch.x = 300;
          couch.y = 200;
          pMove();
          pHealthBar();
          if (p.isTouching(couch)) {
            pHealth = pHealth+stageNum+20;
            stageNum = 8.5;
          }
        }
      } else {
        c1.x = -10;
        c1.visible = true;
      }
    }
  }
}
var JDCutTime = 0;
function JDVanceActivate() {
  if (stageNum==8.5) {
    Elon.destroy();
    JDCutTime = JDCutTime+0.1;
    JDStick();
    if (JDCutTime<=5) {
      couch.setAnimation("Couch Broken");
    }
    if (JDCutTime>=6) {
      if (JDCutTime<=7) {
        JDBody.x = couch.x;
        JDBody.y = couch.y-300;
      }
    }
    if (JDCutTime>=8) {
      if (JDBody.y<couch.y-150) {
        JDBody.velocityY = 1;
      } else {
        JDBody.velocityY = 0;
        JDArms();
      }
    }
    drawSprites();
    if (JDCutTime>=45) {
      p.y = 380;
      stageNum = 9;
      stageScreenTime();
      stageScreen();
    }
  }
}
function JDStick() {
  JDLegs.x = JDBody.x-3;
  JDLegs.y = JDBody.y+50;
}
var JDADB = false;
function JDArms() {
  if (JDADB==false) {
    p.velocityX = 0;
    p.velocityY = 0;
    camera.x = JDBody.x;
    camera.y = JDBody.y+100;
    JDLA1.x = JDBody.x-50;
    JDLA1.y = JDBody.y+120;
    JDLA2.x = JDBody.x-50;
    JDLA2.y = JDBody.y+120;
    JDLA3.x = JDBody.x-50;
    JDLA3.y = JDBody.y+120;
    JDLA4.x = JDBody.x-50;
    JDLA4.y = JDBody.y+120;
    JDLH.x = JDBody.x-50;
    JDLH.y = JDBody.y+120;
    JDRA1.x = JDBody.x+50;
    JDRA1.y = JDBody.y+120;
    JDRA2.x = JDBody.x+50;
    JDRA2.y = JDBody.y+120;
    JDRA3.x = JDBody.x+50;
    JDRA3.y = JDBody.y+120;
    JDRA4.x = JDBody.x+50;
    JDRA4.y = JDBody.y+120;
    JDRH.x = JDBody.x + 50;
    JDRH.y = JDBody.y+120;
    JDADB = true;
  }
  if (JDLA2.y<JDBody.y+150) {
    JDLA2.y = JDLA2.y+2;
  }
  if (JDLA3.y<JDBody.y+180) {
    JDLA3.y = JDLA3.y+2;
  }
  if (JDLA4.y<JDBody.y+210) {
    JDLA4.y = JDLA4.y+2;
  }
  if (JDLH.y<JDBody.y+240) {
    JDLH.y = JDLH.y+2;
    p.setAnimation("StartAnim");
    p.y = JDLH.y;
    p.x = JDLH.x;
  } else {
    p.setAnimation("PlayerFront");
    p.x = JDBody.x;
  }
  if (JDRA2.y<JDBody.y+150) {
    JDRA2.y = JDRA2.y+2;
  }
  if (JDRA3.y<JDBody.y+180) {
    JDRA3.y = JDRA3.y+2;
  }
  if (JDLA4.y<JDBody.y+210) {
    JDRA4.y = JDRA4.y+2;
  }
  if (JDRH.y<JDBody.y+240) {
    JDRH.y = JDRH.y+2;
  }
}
var JDWhenToMove = 0;
var JDDTimer = 0;
function stage9() {
  if (stageNum==9) {
    if (pHealth>0) {
      if (StartMenu.visible == false) {
        bossHealthHolder.visible = true;
        bossHealthHolder.x = camera.x+-200;
        bossHealthHolder.y = camera.y;
        bossHealthHolder.height = 270;
        bossHealthHolder.width = 30;
        JDBossHealth.visible = true;
        JDBossHealth.x = camera.x+-200;
        JDBossHealth.y = camera.y;
        JDBossHealth.width = 30;
        JDBossHealth.height = 270-JDGotHit*3;
        Elon.visible = false;
        gVE.visible = false;
        background("white");
        StartStoryBG.setAnimation("WMStage7-9");
        StartStoryBG.scale = 1;
        ceiling.y = 380;
        LWall.x = -250;
        RWall.x = 600;
        if (JDGotHit<90) {
          JDBulletArmBlock();
          JDStick();
          JDArmStuff();
          JDBlink();
          pGotPunched();
          if (JDLaserAttack==true) {
            JDWhenToMove = 0;
            JDBody.velocityX = 0;
          }
          if (JDArmAttack==true) {
            JDWhenToMove = 0;
            JDBody.velocityX = 0;
          }
          if (JDCouchAttack==true) {
            JDWhenToMove = 0;
            JDBody.velocityX = 0;
          } else if (JDIdle==true) {
            JDWhenToMove = 1;
          }
          if (JDWhenToMove==1) {
            JDAIMoveX();
          }
        }
        clouds();
        if (p.x>-60) {
          if (p.x<460) {
            camera.x = p.x;
          }
        }
        camera.y = JDBody.y+180;
        pMove();
        iceClose();
        pGun();
        pPunchUlt();
        playerHit();
        JDDead();
        drawSprites();
        pHealthBar();
        if (JDGotHit>=90) {
          bossHealthHolder.visible = false;
          JDBossHealth.visible = false;
          JDDTimer = JDDTimer+0.05;
          p.velocityY = 0;
          p.velocityX = 0;
          JDBody.setAnimation("JDSplash");
          JDLA1.destroy();
          JDLA2.destroy();
          JDLA3.destroy();
          JDLA4.destroy();
          JDLH.destroy();
          JDRA1.destroy();
          JDRA2.destroy();
          JDRA3.destroy();
          JDRA4.destroy();
          JDRH.destroy();
          JDLegs.destroy();
          if (JDDTimer>=5) {
            JDBody.destroy();
            if (JDDTimer>=8) {
              pHealth = pHealth+stageNum;
              p.x = 200;
              p.y = 200;
              camera.x = 200;
              camera.y = 200;
              iceGotHit = 0;
              iceGotHit2 = 0;
              stageNum = 10;
              stageScreenTime();
              stageScreen();
            }
          }
        }
      } else {
        c1.x = -10;
        c1.visible = true;
      }
    }
  }
}
//Camera movement for stages >=7
function pCamera() {
  if (p.x>-60) {
    if (p.x<465) {
      camera.x = p.x;
    }
  }
  if (p.y>100) {
    if (p.y<290) {
      camera.y = p.y;
    }
  }
}
//Cloud Movement
function clouds() {
  if (c1.x>500) {
    if (c1.visible==true) {
      c2.x = -20;
      c2.visible = true;
    }
    c1.visible = false;
  } else if (c2.x>500) {
    if (c2.visible==true) {
      c1.x = -20;
      c1.visible = true;
    }
    c2.visible = false;
  }
}
//Player movement
function pLeft() {
  if (keyDown("left")) {
    if (stageNum<=8) {
      p.velocityX = -5;
      p.setAnimation("PlayerLWalk");
    } else if (stageNum>=9) {
      p.velocityX = -5;
      p.setAnimation("PlayerJDLWalk");
    }
  } else {
    if (keyWentUp("left")) {
      if (stageNum<=8) {
        p.velocityX = 0;
        p.setAnimation("PlayerLIdle");
      } else if (stageNum>=9) {
        p.velocityX = 0;
        p.setAnimation("PlayerJDFightIdle");
      }
    }
  }
}
function pRight() {
  if (keyDown("right")) {
    if (stageNum<=8) {
      p.velocityX = 5;
      p.setAnimation("PlayerRWalk");
    } else if (stageNum>=9) {
      p.velocityX = 5;
      p.setAnimation("PlayerJDRWalk");
    }
  } else {
    if (keyWentUp("right")) {
      if (stageNum<=8) {
        p.velocityX = 0;
        p.setAnimation("PlayerRIdle");
      } else if (stageNum>=9) {
        p.velocityX = 0;
        p.setAnimation("PlayerJDFightIdle");
      }
    }
  }
}
function pUp() {
  if (p.y>ceiling.y-10) {
    if (keyDown("up")) {
      if (p.velocityY>-10) {
        if (p.velocityY<10) {
          if (p.y>ceiling.y) {
            p.velocityY = -5;
          } else {
            if (p.y<ceiling.y) {
              p.velocityY = 0;
            }
          }
        }
      }
    } else if ((keyWentUp("up"))) {
      p.velocityY = 0;
    }
  }
}
function pDown() {
  if (p.y>ceiling.y-50) {
    if (keyDown("down")) {
      if (p.y<380) {
        p.velocityY = 5;
      } else {
        p.velocityY = 0;
      }
    } else {
      if (keyWentUp("down")) {
        p.velocityY = 0;
      }
    }
  }
}
var whereWas = 0;
var howHigh = 0;
function pJump() {
  if (keyWentDown("z") && keyWentDown("x")) {
    if (keyDown("up")==false) {
      if (p.y>ceiling.y-10) {
        whereWas = p.y;
        howHigh = p.y-150;
        p.velocityY = -10;
      }
    }
  } else if ((keyWentUp("x"))) {
    if ((p.velocityY)<=-10) {
      p.velocityY = 5;
    }
  } else if ((keyWentUp("z"))) {
    if ((p.velocityY)<=-10) {
      p.velocityY = 5;
    }
  } else if ((p.y>=whereWas)) {
    p.velocityY = 0;
    whereWas = 0;
  } else if ((p.y<howHigh)) {
    p.velocityY = 5;
  } else if ((p.y<ceiling.y && p.velocityY>-10)) {
    p.velocityY = 5;
    whereWas = ceiling.y+10;
  }
}
function pMove() {
  if (pHealth>0) {
    pJump();
    pLeft();
    pRight();
    pUp();
    pDown();
  }
}
//Enemy AI
function ICEAIHoriz() {
  if (ICE.x>p.x) {
    if (ICE.x<p.x+50) {
      ICE.velocityX = 0;
      if (ICE.velocityY==0) {
        ICE.setAnimation("IceLSide");
      } else {
        if (ICE.velocityY>0) {
          ICE.setAnimation("IceLWalk");
        } else {
          if (ICE.velocityY<0) {
            ICE.setAnimation("IceLWalk");
          }
        }
      }
    } else {
      ICE.setAnimation("IceLWalk");
      ICE.velocityX = -1.5;
    }
  } else {
    if (ICE.x<p.x) {
      if (ICE.x>p.x-50) {
        ICE.velocityX = 0;
        if (ICE.velocityY==0) {
          ICE.setAnimation("IceRSide");
        } else {
          if (ICE.velocityY>0) {
            ICE.setAnimation("IceRWalk");
          } else {
            if (ICE.velocityY<0) {
              ICE.setAnimation("IceRWalk");
            }
          }
        }
      } else {
        ICE.setAnimation("IceRWalk");
        ICE.velocityX = 1.5;
      }
    }
  }
}
function ICEAIHoriz2() {
  if (ICE2.x>p.x) {
    if (ICE2.x<p.x+50) {
      ICE2.velocityX = 0;
      if (ICE2.velocityY==0) {
        ICE2.setAnimation("IceLSide");
      } else {
        if (ICE2.velocityY>0) {
          ICE2.setAnimation("IceLWalk");
        } else {
          if (ICE2.velocityY<0) {
            ICE2.setAnimation("IceLWalk");
          }
        }
      }
    } else {
      ICE2.setAnimation("IceLWalk");
      ICE2.velocityX = -1.5;
    }
  } else {
    if (ICE2.x<p.x) {
      if (ICE2.x>p.x-50) {
        ICE2.velocityX = 0;
        if (ICE2.velocityY==0) {
          ICE2.setAnimation("IceRSide");
        } else {
          if (ICE2.velocityY>0) {
            ICE2.setAnimation("IceRWalk");
          } else {
            if (ICE2.velocityY<0) {
              ICE2.setAnimation("IceRWalk");
            }
          }
        }
      } else {
        ICE2.setAnimation("IceRWalk");
        ICE2.velocityX = 1.5;
      }
    }
  }
}
function ICEAIVert() {
  if (ICE.y>p.y) {
    if (ICE.y<p.y+5) {
      ICE.velocityY = 0;
    } else {
      if (ICE.y>=ceiling.y) {
        ICE.velocityY = -1.5;
      } else {
        ICE.velocityY = 0;
      }
    }
  } else {
    if (ICE.y<p.y) {
      if (ICE.y>p.y-5) {
        ICE.velocityY = 0;
      } else {
        ICE.velocityY = 1.5;
      }
    }
  }
}
function ICEAIVert2() {
  if (ICE2.y>p.y) {
    if (ICE2.y<p.y+5) {
      ICE2.velocityY = 0;
    } else {
      if (ICE2.y>=ceiling.y) {
        ICE2.velocityY = -1.5;
      } else {
        ICE2.velocityY = 0;
      }
    }
  } else {
    if (ICE2.y<p.y) {
      if (ICE2.y>p.y-5) {
        ICE2.velocityY = 0;
      } else {
        ICE2.velocityY = 1.5;
      }
    }
  }
}
function gVAIHoriz() {
  if (stageNum<7) {
    if (gVE.x>p.x) {
      if (gVE.x<p.x+80) {
        gVE.velocityX = 0;
        if (gVE.velocityY==0) {
          gVE.setAnimation("GregoryBovinoLIdle");
        } else {
          if (gVE.velocityY>0) {
            gVE.setAnimation("GregoryBovinoLWalk");
          } else {
            if (gVE.velocityY<0) {
              gVE.setAnimation("GregoryBovinoLWalk");
            }
          }
        }
      } else {
        gVE.setAnimation("GregoryBovinoLWalk");
        gVE.velocityX = -1.5;
      }
    } else {
      if (gVE.x<p.x) {
        if (gVE.x>p.x-80) {
          gVE.velocityX = 0;
          if (gVE.velocityY==0) {
            gVE.setAnimation("GregoryBovinoRIdle");
          } else {
            if (gVE.velocityY>0) {
              gVE.setAnimation("GregoryBovinoRWalk");
            } else {
              if (gVE.velocityY<0) {
                gVE.setAnimation("GregoryBovinoRWalk");
              }
            }
          }
        } else {
          gVE.setAnimation("GregoryBovinoRWalk");
          gVE.velocityX = 1.5;
        }
      }
    }
  } else if (stageNum>=7) {
    if (gVE.x>p.x) {
      if (gVE.x<p.x+80) {
        gVE.velocityX = 0;
        if (gVE.velocityY==0) {
          gVE.setAnimation("GregoryBovinoLIdleOwie");
        } else {
          if (gVE.velocityY>0) {
            gVE.setAnimation("GregoryBovinoLWalkOwie");
          } else {
            if (gVE.velocityY<0) {
              gVE.setAnimation("GregoryBovinoLWalkOwie");
            }
          }
        }
      } else {
        gVE.setAnimation("GregoryBovinoLWalkOwie");
        gVE.velocityX = -1.5;
      }
    } else {
      if (gVE.x<p.x) {
        if (gVE.x>p.x-80) {
          gVE.velocityX = 0;
          if (gVE.velocityY==0) {
            gVE.setAnimation("GregoryBovinoRIdleOwie");
          } else {
            if (gVE.velocityY>0) {
              gVE.setAnimation("GregoryBovinoRWalkOwie");
            } else {
              if (gVE.velocityY<0) {
                gVE.setAnimation("GregoryBovinoRWalkOwie");
              }
            }
          }
        } else {
          gVE.setAnimation("GregoryBovinoRWalkOwie");
          gVE.velocityX = 1.5;
        }
      }
    }
  }
}
function gVAIVert() {
  if (gVE.y>p.y) {
    if (gVE.y<p.y+5) {
      gVE.velocityY = 0;
    } else {
      if (gVE.y>=ceiling.y) {
        gVE.velocityY = -1.5;
      } else {
        gVE.velocityY = 0;
      }
    }
  } else {
    if (gVE.y<p.y) {
      if (gVE.y>p.y-25) {
        gVE.velocityY = 0;
      } else {
        gVE.velocityY = 1.5;
      }
    }
  }
}
var elonRunDeb = 0;
function elonAiMoveY() {
  if (Elon.y>360) {
    elonRunDeb = 1;
    Elon.velocityY = 0;
  } else if ((Elon.y<180)) {
    elonRunDeb = 0;
    Elon.velocityY = 0;
  }
  if (elonRunDeb==0) {
    if (Elon.velocityX==5) {
      Elon.velocityY = 15;
    }
  } else if (elonRunDeb==1) {
    if (Elon.velocityX==-5) {
      Elon.velocityY = -15;
    }
  }
}
var elonHitCount = 0;
var elonXDeb = 0;
function elonAiMoveX() {
  if (Elon.x<20) {
    Elon.velocityX = 0;
    elonXDeb = 0;
  } else if ((Elon.x>550)) {
    Elon.velocityX = 0;
    elonXDeb = 1;
  }
  if (elonXDeb==0) {
    if (elonHitCount==5) {
      Elon.velocityX = 5;
    }
  } else if (elonXDeb==1) {
    if (elonHitCount==5) {
      Elon.velocityX = -5;
    }
  }
  if (Elon.velocityX>0.01) {
    if (elonGotHit<=26) {
      Elon.setAnimation("ElonMuskRRun");
    } else if (elonGotHit>=27) {
      Elon.setAnimation("ElonMuskV2RRun");
    }
  } else if (Elon.velocityX<-0.01) {
    if (elonGotHit<=26) {
      Elon.setAnimation("ElonMuskLRun");
    } else if (elonGotHit>=27) {
      Elon.setAnimation("ElonMuskV2LRun");
    }
  }
  if (elonHitCount>=5) {
    elonHitCount = 0;
  }
}
function JDAIMoveX() {
  if (JDBody.x>p.x+10) {
    JDLegs.setAnimation("JDLeft");
    JDBody.velocityX = -3;
  } else if ((JDBody.x<p.x-10)) {
    JDLegs.setAnimation("JDRight");
    JDBody.velocityX = 3;
  } else {
    if (JDBody.x<p.x+10) {
      if (JDBody.x>p.x-10) {
        JDLegs.setAnimation("JDLegs");
        JDBody.velocityX = 0;
      }
    }
  }
}
//Car for stages 5-6
var spawnCar = 0;
var car = createSprite(1000, 200);
car.setAnimation("Car");
car.scale = 2.5;
car.velocityX = 5;
var carGotHit = 0;
function vroomVroom() {
  spawnCar = spawnCar+randomNumber(0.5, 1);
  if (spawnCar>=70) {
    car.x = -50;
    car.y = 225;
    spawnCar = 0;
  }
  if (car.isTouching(p)) {
    p.y = p.y+50;
    pHealth = pHealth-2;
  } else if ((car.isTouching(ICE))) {
    ICE.y = ICE.y+50;
    iceGotHit = iceGotHit+2;
  } else if ((car.isTouching(ICE2))) {
    ICE2.y = ICE2.y+50;
    iceGotHit2 = iceGotHit2+2;
  } else if ((car.isTouching(gVE))) {
    gVE.y = gVE.y+10;
    iceGotHit2 = gVEGotHit+1;
    carGotHit = 1;
  } else if (carGotHit==1) {
    car.y = car.y-5;
    car.rotation = car.rotation+5;
    if (car.y<0) {
      car.rotation = 0;
      if (car.rotation==0) {
        carGotHit = 0;
      }
    }
  }
}
//Player health stuff
var pHealth = 35;
function cheatCodeHP() {
  if (cheatCode==11) {
    pHealth = 70;
  }
}
function playerHit() {
  if (p.isTouching(ICE)) {
    if (p.x<ICE.x) {
      p.x = p.x-30;
      pHealth = pHealth-1;
    } else {
      if (p.x>ICE.x) {
        p.x = p.x+30;
        pHealth = pHealth-1;
      }
    }
  } else if ((p.isTouching(ICE2))) {
    if (p.x<ICE2.x) {
      p.x = p.x-30;
      pHealth = pHealth-1;
    } else {
      if (p.x>ICE2.x) {
        p.x = p.x+30;
        pHealth = pHealth-1;
      }
    }
  } else if ((p.isTouching(gVE))) {
    if (p.x<gVE.x) {
      p.x = p.x-30;
      pHealth = pHealth-1;
    } else {
      if (p.x>gVE.x) {
        p.x = p.x+30;
        pHealth = pHealth-1;
      }
    }
  } else if ((p.isTouching(Cybertruck))) {
    pHealth = pHealth-1;
    p.y = p.y-50;
    whereWas = p.y+100;
    if (p.y<ceiling.y) {
      p.velocityY = 5;
      if (p.y>=whereWas) {
        p.velocityY = 0;
      }
    }
  } else if (p.isTouching(Elon)) {
    if (p.x<Elon.x) {
      p.x = p.x-30;
      pHealth = pHealth-1;
    } else {
      if (p.x>Elon.x) {
        p.x = p.x+30;
        pHealth = pHealth-1;
      }
    }
  } else if ((p.isTouching(fires))) {
    pHealth = pHealth-randomNumber(0,randomNumber(0, 1));
    p.x = p.x+randomNumber(-5, 5);
  } else if ((p.isTouching(JDLH))) {
    if (p.x<JDLH.x) {
      p.x = p.x-10;
    } else {
      p.x = p.x+10;
    }
    pHealth = pHealth-1;
  } else if (p.isTouching(JDRH)) {
    if (p.x<JDRH.x) {
      p.x = p.x-10;
    } else {
      p.x = p.x+10;
    }
    pHealth = pHealth-1;
  }
}
var PunchIce = createSprite(1000, 1000);
PunchIce.setAnimation("punchICE");
PunchIce.scale = 0.5;
PunchIce.width = 50;
PunchIce.visible = false;
var punchTimer = 0;
var punchTimes = 0;
var iceGotHit = 0;
var iceGotHit2 = 0;
var gVEGotHit = 0;
var elonGotHit = 0;
var JDGotHit = 0;
var closeRight = 0;
var closeLeft = 0;
function iceClose() {
  closeRight = p.x+51;
  closeLeft = p.x-51;
}
//Player punch stuff
function pPunch() {
  if (punchTimes<4) {
    if (keyWentDown("z")) {
      p.setAnimation("PlayerLPunch");
      PunchIce.y = p.y;
      PunchIce.x = p.x-30;
      punchTimes = punchTimes+1;
      console.log(punchTimes);
    } else if ((keyWentDown("x"))) {
      p.setAnimation("PlayerRPunch");
      PunchIce.y = p.y;
      PunchIce.x = p.x+30;
      punchTimes = punchTimes+1;
      console.log(punchTimes);
    } else if ((keyWentUp("x"))) {
      if (stageNum<=8) {
        p.setAnimation("PlayerRIdle");
      } else if ((stageNum>=9)) {
        p.setAnimation("PlayerJDFightIdle");
      }
    } else if ((keyWentUp("z"))) {
      if (stageNum<=8) {
        p.setAnimation("PlayerLIdle");
      } else if ((stageNum>=9)) {
        p.setAnimation("PlayerJDFightIdle");
      }
    }
  } else if ((punchTimes>=4)) {
    punchTimer = punchTimer+0.1;
  }
  if (punchTimer>=1.8) {
    PunchIce.x = 1000;
    punchTimer = 0;
    punchTimes = 0;
  }
}
//Gun stuff for stage 9
var bullet = createSprite(-1000, -1000);
bullet.setAnimation("Bullet");
var bulletDB = false;
function pGun() {
  if (keyWentDown("x")) {
    if (bulletDB==false) {
      p.setAnimation("PlayerJDFightShoot");
      bullet.x = p.x;
      bullet.y = p.y;
      bullet.rotation = -90;
      bullet.velocityY = -30;
      bulletDB = true;
    }
    if (bullet.y<JDBody.y) {
      bulletDB = false;
    }
  } else if ((keyWentDown("z"))) {
    if (bulletDB==false) {
      p.setAnimation("PlayerJDFightShoot");
      bullet.x = p.x;
      bullet.y = p.y;
      bullet.rotation = -90;
      bullet.velocityY = -30;
      bulletDB = true;
    }
    if (bullet.y<JDBody.y) {
      bulletDB = false;
    }
  } else if ((keyWentUp("x"))) {
    p.setAnimation("PlayerJDFightIdle");
  } else if ((keyWentUp("z"))) {
    p.setAnimation("PlayerJDFightIdle");
  }
}
//Detect when player punches enemy
function pPunchUlt() {
  if (PunchIce.isTouching(ICE)) {
    playSound("assets/pPunch.mp3", false);
    iceGotHit = iceGotHit+1;
    PunchIce.x = -1000;
    if (ICE.x>p.x) {
      ICE.x = ICE.x+10;
    } else {
      ICE.x = ICE.x-10;
    }
  } else if ((PunchIce.isTouching(ICE2))) {
    playSound("assets/pPunch.mp3", false);
    iceGotHit2 = iceGotHit2+1;
    PunchIce.x = -1000;
    if (ICE2.x>p.x) {
      ICE2.x = ICE2.x+10;
    } else {
      ICE2.x = ICE2.x-10;
    }
  } else if ((PunchIce.isTouching(gVE))) {
    playSound("assets/pPunch.mp3", false);
    gVEGotHit = gVEGotHit+1;
    PunchIce.x = -1000;
    if (gVE.x>p.x) {
      gVE.x = gVE.x+15;
    } else {
      gVE.x = gVE.x-15;
    }
  } else if ((PunchIce.isTouching(Elon))) {
    playSound("assets/pPunch.mp3", false);
    elonGotHit = elonGotHit+1;
    elonHitCount = elonHitCount+1;
    if (elonGotHit<=26) {
      Elon.setAnimation("ElonMuskROw");
    } else if (elonGotHit>=27) {
      Elon.setAnimation("ElonMuskV2Ow");
    }
    PunchIce.x = -1000;
  } else if ((PunchIce.isTouching(JDBody))) {
    playSound("assets/pPunch.mp3", false);
    JDBody.setAnimation("JDFullBody");
    bullet.velocityY = 0;
    bullet.y = JDBody.y-500;
    PunchIce.x = -1000;
    JDGotHit = JDGotHit+1;
    JDBody.setAnimation("JDRoar");
  } else if ((bulletDB==true)) {
    PunchIce.x = bullet.x;
    PunchIce.y = bullet.y;
  }
}
//Detect when enemy punches/touches player
var icePunchBlock = createSprite(1000, 200);
icePunchBlock.setAnimation("punchICE");
icePunchBlock.scale = 0.5;
icePunchBlock.visible = false;
icePunchBlock.height = 20;
icePunchBlock.width = 50;
var icePunchBlock2 = createSprite(1000, 200);
icePunchBlock2.setAnimation("punchICE");
icePunchBlock2.scale = 0.5;
icePunchBlock2.visible = false;
icePunchBlock2.height = 20;
icePunchBlock2.width = 50;
var iceP = 0;
var iceP2 = 0;
function icePunch() {
  iceP = randomNumber(0, 25);
  if (ICE.x>p.x) {
    if (ICE.x<=closeRight) {
      if (iceP==10) {
        ICE.setAnimation("IceLPunch");
        icePunchBlock.y = ICE.y;
        icePunchBlock.x = ICE.x-40;
      }
    }
  } else {
    if (ICE.x<p.x) {
      if (ICE.x>=closeLeft) {
        if (iceP==10) {
          ICE.setAnimation("IceRPunch");
          icePunchBlock.y = ICE.y;
          icePunchBlock.x = ICE.x+40;
        }
      }
    }
  }
}
function icePunch2() {
  iceP2 = randomNumber(0, 25);
  if (ICE2.x>p.x) {
    if ((ICE2.x)<=closeRight) {
      if (iceP2==10) {
        ICE2.setAnimation("IceLPunch");
        icePunchBlock2.y = ICE2.y;
        icePunchBlock2.x = ICE2.x-40;
      }
    }
  } else {
    if (ICE2.x<p.x) {
      if (ICE2.x>=closeLeft) {
        if (iceP2==10) {
          ICE2.setAnimation("IceRPunch");
          icePunchBlock2.y = ICE2.y;
          icePunchBlock2.x = ICE2.x+40;
        }
      }
    }
  }
}
var gVEPunchBlock = createSprite(1000, 200);
gVEPunchBlock.setAnimation("punchICE");
gVEPunchBlock.visible = false;
gVEPunchBlock.height = 20;
gVEPunchBlock.width = 50;
var gVEP2 = 0;
function gVPunch() {
  gVEP2 = randomNumber(0, 25);
  if (stageNum<7) {
    if (gVE.x>p.x) {
      if ((gVE.x)<=(closeRight+30)) {
        if (gVEP2==10) {
          gVE.setAnimation("GregoryBovinoLPunch");
          gVEPunchBlock.y = gVE.y;
          gVEPunchBlock.x = gVE.x-55;
        }
      }
    } else {
      if (gVE.x>=closeLeft-30) {
        if (gVEP2==10) {
          gVE.setAnimation("GregoryBovinoRPunch");
          gVEPunchBlock.y = gVE.y;
          gVEPunchBlock.x = gVE.x+55;
        }
      }
    }
  } else if (stageNum>=7) {
    if (gVE.x>p.x) {
      if ((gVE.x)<=(closeRight+30)) {
        if (gVEP2==10) {
          gVE.setAnimation("GregoryBovinoLPunchOwie");
          gVEPunchBlock.y = gVE.y;
          gVEPunchBlock.x = gVE.x-55;
        }
      }
    } else {
      if (gVE.x>=closeLeft-30) {
        if (gVEP2==10) {
          gVE.setAnimation("GregoryBovinoRPunchOwie");
          gVEPunchBlock.y = gVE.y;
          gVEPunchBlock.x = gVE.x+55;
        }
      }
    }
  }
}
var gVJumpTime = 0;
var gVRandom = 25;
var gVDestinationL = 0;
var gVDestinationR = 0;
var gVJumpHeight = 0;
var gVJumpStart = 0;
var gVAirTime = 0;
var jumpDir = 1;
function gVJump() {
  if (stageNum<7) {
    gVJumpTime = gVJumpTime + 0.1;
  } else if (stageNum>=7) {
    gVJumpTime = gVJumpTime + 0.2;
  }
  if (gVJumpTime>=gVRandom) {
    gVAirTime = gVAirTime+0.5;
    gVJumpStart = p.y;
    if (gVAirTime<=1) {
      playSound("assets/G.BJump.mp3", false);
      gVDestinationL = p.x-100;
      gVDestinationR = p.x+100;
      gVJumpHeight = p.y-350;
      if (gVE.x>p.x) {
        jumpDir = 1;
      } else {
        jumpDir = 2;
      }
    }
    if (gVAirTime>=2) {
      if (gVAirTime<=16) {
        if (gVE.y>gVJumpHeight) {
          gVE.velocityY = -8;
        } else if (gVE.y<gVJumpHeight) {
          gVE.velocityY = 0;
        }
      }
      if (gVAirTime>=17) {
        if (gVE.y<gVJumpStart) {
          gVE.velocityY = 8;
          if (jumpDir==1) {
            if (gVE.x>gVDestinationL) {
              gVE.velocityX = -5;
            }
          } else if (jumpDir==2) {
            if (gVE.x<gVDestinationR) {
              gVE.velocityX = 5;
            }
          }
        } else if (gVE.y>gVJumpStart) {
          if (gVE.y<p.y+20) {
            gVE.velocityY = 0;
            gVE.velocityX = 0;
            camera.x = randomNumber(camera.x-20, camera.x+20);
          }
        }
        if (gVAirTime>=35) {
          if (stageNum<7) {
            gVRandom = randomNumber(10,25);
          }
          gVAirTime = 0;
          gVJumpTime = 0;
        }
      }
    }
  }
}
var fire = createSprite(200, 600);
fire.setAnimation("FireL");
var EEP2 = 0;
var fireShootTimer = 0;
var fireShootDeb = 0;
var fireLR = 0;
function elonPunch() {
  EEP2 = randomNumber(0, 50);
  if (Elon.x>p.x) {
    if ((Elon.x)<=(closeRight+500)) {
      if (EEP2==10) {
        fireShootDeb = 1;
        fireLR = 0;
        fire.setAnimation("FireL");
      }
    }
  } else {
    if (Elon.x>=closeLeft-500) {
      if (EEP2==10) {
        fireShootDeb = 1;
        fireLR = 1;
        fire.setAnimation("FireR");
      }
    }
  }
}
var spray = 0;
var fires = createGroup();
function fireShot() {
  if (fireLR==0) {
    if (fireShootDeb==1) {
      fireShootTimer = fireShootTimer+0.2;
      if (fireShootTimer<5) {
        if (elonGotHit>=27) {
          Elon.setAnimation("ElonMuskV2LFlame");
        } else if ((elonGotHit<=26)) {
          Elon.setAnimation("ElonMuskLFlame");
        }
      }
      if (fireShootTimer>=7) {
        spray = spray+0.25;
        if (spray==1) {
          playSound("assets/ElonFires.mp3", false);
          var fireshoot = createSprite(Elon.x-50, Elon.y-15);
          fireshoot.setAnimation("FireR");
          fireshoot.pointTo(p.x, p.y);
          fireshoot.setSpeedAndDirection(8, fireshoot.rotation);
          fireshoot.lifetime = 80;
          fires.add(fireshoot);
        } else if (spray==2) {
          var fireshoot = createSprite(Elon.x-50, Elon.y-15);
          fireshoot.setAnimation("FireR");
          fireshoot.pointTo(p.x, p.y);
          fireshoot.setSpeedAndDirection(8, fireshoot.rotation);
          fireshoot.lifetime = 80;
          fires.add(fireshoot);
        } else if (spray==3) {
          var fireshoot = createSprite(Elon.x-50, Elon.y-15);
          fireshoot.setAnimation("FireR");
          fireshoot.pointTo(p.x, p.y);
          fireshoot.setSpeedAndDirection(8, fireshoot.rotation);
          fireshoot.lifetime = 80;
          fires.add(fireshoot);
        } else if (spray==4) {
          var fireshoot = createSprite(Elon.x-50, Elon.y-15);
          fireshoot.setAnimation("FireR");
          fireshoot.pointTo(p.x, p.y);
          fireshoot.setSpeedAndDirection(8, fireshoot.rotation);
          fireshoot.lifetime = 80;
          fires.add(fireshoot);
        } else if (spray==5) {
          var fireshoot = createSprite(Elon.x-50, Elon.y-15);
          fireshoot.setAnimation("FireR");
          fireshoot.pointTo(p.x, p.y);
          fireshoot.setSpeedAndDirection(8, fireshoot.rotation);
          fireshoot.lifetime = 80;
          fires.add(fireshoot);
        }
      }
      if (fireShootTimer>=8) {
        if (fireShootTimer>=randomNumber(15, 25)) {
          if (elonGotHit<=26) {
            Elon.setAnimation("ElonMuskLIdle");
          } else if (elonGotHit>=27) {
            Elon.setAnimation("ElonMuskV2LIdle");
          }
          fireShootDeb = 0;
          fire.y = 600;
          fireShootTimer = 0;
          spray = 0;
        }
      }
    }
  } else if ((fireLR==1)) {
    if (fireShootDeb==1) {
      fireShootTimer = fireShootTimer+0.1;
      if (fireShootTimer<5) {
        if (elonGotHit>=27) {
          Elon.setAnimation("ElonMuskV2RFlame");
        } else if ((elonGotHit<=26)) {
          Elon.setAnimation("ElonMuskRFlame");
        }
      }
      if (fireShootTimer>=7) {
        spray = spray+0.25;
        if (spray==1) {
          playSound("assets/ElonFires.mp3", false);
          var fireshoot = createSprite(Elon.x-(-50), Elon.y-15);
          fireshoot.setAnimation("FireR");
          fireshoot.pointTo(p.x, p.y);
          fireshoot.setSpeedAndDirection(8, fireshoot.rotation);
          fireshoot.lifetime = 80;
          fires.add(fireshoot);
        } else if (spray==2) {
          var fireshoot = createSprite(Elon.x-(-50), Elon.y-15);
          fireshoot.setAnimation("FireR");
          fireshoot.pointTo(p.x, p.y);
          fireshoot.setSpeedAndDirection(8, fireshoot.rotation);
          fireshoot.lifetime = 80;
          fires.add(fireshoot);
        } else if (spray==3) {
          var fireshoot = createSprite(Elon.x-(-50), Elon.y-15);
          fireshoot.setAnimation("FireR");
          fireshoot.pointTo(p.x, p.y);
          fireshoot.setSpeedAndDirection(8, fireshoot.rotation);
          fireshoot.lifetime = 80;
          fires.add(fireshoot);
        } else if (spray==4) {
          var fireshoot = createSprite(Elon.x-(-50), Elon.y-15);
          fireshoot.setAnimation("FireR");
          fireshoot.pointTo(p.x, p.y);
          fireshoot.setSpeedAndDirection(8, fireshoot.rotation);
          fireshoot.lifetime = 80;
          fires.add(fireshoot);
        } else if (spray==5) {
          var fireshoot = createSprite(Elon.x-(-50), Elon.y-15);
          fireshoot.setAnimation("FireR");
          fireshoot.pointTo(p.x, p.y);
          fireshoot.setSpeedAndDirection(8, fireshoot.rotation);
          fireshoot.lifetime = 80;
          fires.add(fireshoot);
        }
      }
      if (fireShootTimer>=8) {
        if (fireShootTimer>=randomNumber(15, 25)) {
          if (elonGotHit<=26) {
            Elon.setAnimation("ElonMuskRIdle");
          } else if (elonGotHit>=27) {
            Elon.setAnimation("ElonMuskV2RIdle");
          }
          fireShootDeb = 0;
          fire.y = 600;
          fireShootTimer = 0;
          spray = 0;
        }
      }
    }
  }
}
function elonCyberAttack() {
  if (elonHitCount==5) {
    if (p.x<Elon.x) {
      Cybertruck.setAnimation("CybertruckL");
      Cybertruck.pointTo(p.x, p.y);
      Cybertruck.setSpeedAndDirection(12, Cybertruck.rotation);
    } else if (p.x>Elon.x) {
      Cybertruck.setAnimation("CybertruckR");
      Cybertruck.pointTo(p.x, p.y);
      Cybertruck.setSpeedAndDirection(12, Cybertruck.rotation);
    }
  } else if ((Cybertruck.y>=600)) {
    Cybertruck.y = Cybertruck.y-30;
  } else if (((Cybertruck.y)<=-200)) {
    Cybertruck.y = Cybertruck.y+30;
  } else if ((Cybertruck.x<=-380)) {
    Cybertruck.x = Cybertruck.x+30;
  } else if ((Cybertruck.x>=800)) {
    Cybertruck.x = Cybertruck.x-30;
  }
}
var JDIdle = true;
var JDArmAttack = false;
var JDSetLArmAttack = 0;
var JDSetRArmAttack = 0;
var JDLaserAttack = false;
var JDCouchAttack = false;
var JDAttackTimer = 0;
var JDAttackPicker = 0;
var LASL = true;
var RASR = true;
var laserShots = 0;
var couchShots = 0;
var lasers = createGroup();
var couches = createGroup();
function JDBulletArmBlock() {
  if (bullet.isTouching(JDLA1)) {
    playSound("assets/JDArmShot.mp3", false);
    bullet.y = JDBody.y-500;
  } else if ((bullet.isTouching(JDLA2))) {
    playSound("assets/JDArmShot.mp3", false);
    bullet.y = JDBody.y-500;
  } else if ((bullet.isTouching(JDLA3))) {
    playSound("assets/JDArmShot.mp3", false);
    bullet.y = JDBody.y-500;
  } else if ((bullet.isTouching(JDLA4))) {
    playSound("assets/JDArmShot.mp3", false);
    bullet.y = JDBody.y-500;
  } else if ((bullet.isTouching(JDRA1))) {
    playSound("assets/JDArmShot.mp3", false);
    bullet.y = JDBody.y-500;
  } else if ((bullet.isTouching(JDRA2))) {
    playSound("assets/JDArmShot.mp3", false);
    bullet.y = JDBody.y-500;
  } else if ((bullet.isTouching(JDRA3))) {
    playSound("assets/JDArmShot.mp3", false);
    bullet.y = JDBody.y-500;
  } else if ((bullet.isTouching(JDRA4))) {
    playSound("assets/JDArmShot.mp3", false);
    bullet.y = JDBody.y-500;
  }
}
function JDArmStuff() {
  JDAttackTimer = JDAttackTimer+0.05;
  if (JDAttackTimer>=9) {
    JDAttackPicker = randomNumber(0, 3);
    LASL = false;
    RASR = true;
    laserShots = 0;
    couchShots = 0;
    if (JDAttackPicker==0) {
      stopSound("assets/JDHandMove.mp3");
      JDIdle = true;
      JDArmAttack = false;
      JDLaserAttack = false;
      JDCouchAttack = false;
      JDAttackPicker = 0;
      JDAttackTimer = 0;
    } else if ((JDAttackPicker==1)) {
      playSound("assets/JDHandMove.mp3", true);
      JDLH.x = p.x+-70;
      JDRH.x = p.x+70;
      JDIdle = false;
      JDArmAttack = true;
      JDSetLArmAttack = p.x-10;
      JDSetRArmAttack = p.x+10;
      JDLaserAttack = false;
      JDCouchAttack = false;
      JDAttackPicker = 0;
      JDAttackTimer = 0;
    } else if ((JDAttackPicker==2)) {
      stopSound("assets/JDHandMove.mp3");
      JDIdle = false;
      JDArmAttack = false;
      JDLaserAttack = true;
      JDCouchAttack = false;
      JDAttackPicker = 0;
      JDAttackTimer = 0;
    } else if ((JDAttackPicker==3)) {
      stopSound("assets/JDHandMove.mp3");
      JDIdle = false;
      JDArmAttack = false;
      JDLaserAttack = false;
      JDCouchAttack = true;
      JDAttackPicker = 0;
      JDAttackTimer = 0;
    }
  }
  if (JDIdle==true) {
    JDLArmStick();
    JDRArmStick();
    JDLH.x = JDBody.x+-55;
    JDRH.x = JDBody.x+55;
  } else if ((JDArmAttack==true)) {
    JDLArmStick();
    JDRArmStick();
    lArmAttack();
    RArmAttack();
  } else if ((JDLaserAttack==true)) {
    laserShots = laserShots+0.04;
    if (laserShots >= 1 && laserShots < 1.04) {
      playSound("assets/Laser.mp3", false);
      var laser = createSprite(JDBody.x, JDBody.y);
      laser.setAnimation("Laser");
      laser.pointTo(p.x, p.y);
      laser.setSpeedAndDirection(10, laser.rotation);
      lasers.add(laser);
      laser.lifetime = 80;
    } else if (laserShots >= 2 && laserShots < 2.04) {
      playSound("assets/Laser.mp3", false);
      var laser = createSprite(JDBody.x, JDBody.y);
      laser.setAnimation("Laser");
      laser.pointTo(p.x, p.y);
      laser.setSpeedAndDirection(10, laser.rotation);
      lasers.add(laser);
      laser.lifetime = 80;
    } else if (laserShots >= 3 && laserShots < 3.04) {
      playSound("assets/Laser.mp3", false);
      var laser = createSprite(JDBody.x, JDBody.y);
      laser.setAnimation("Laser");
      laser.pointTo(p.x, p.y);
      laser.setSpeedAndDirection(10, laser.rotation);
      lasers.add(laser);
      laser.lifetime = 80;
    } else if (laserShots >= 4 && laserShots < 4.04) {
      playSound("assets/Laser.mp3", false);
      var laser = createSprite(JDBody.x, JDBody.y);
      laser.setAnimation("Laser");
      laser.pointTo(p.x, p.y);
      laser.setSpeedAndDirection(10, laser.rotation);
      lasers.add(laser);
      laser.lifetime = 80;
    } else if (laserShots >= 5 && laserShots < 5.04) {
      playSound("assets/Laser.mp3", false);
      var laser = createSprite(JDBody.x, JDBody.y);
      laser.setAnimation("Laser");
      laser.pointTo(p.x, p.y);
      laser.setSpeedAndDirection(10, laser.rotation);
      lasers.add(laser);
      laser.lifetime = 80;
    }
    if (p.isTouching(lasers)) {
      pHealth = pHealth-randomNumber(0, randomNumber(0, 1));
      p.x = p.x+randomNumber(-5, 5);
    }
    JDLArmStick();
    JDRArmStick();
    JDLH.x = JDBody.x+-10;
    JDRH.x = JDBody.x+10;
  } else if ((JDCouchAttack==true)) {
    JDLArmStick();
    JDRArmStick();
    couchShots = randomNumber(0, 75);
    JDLH.x = JDBody.x+-10;
    JDRH.x = JDBody.x+10;
    if (couchShots==37) {
      var couchProjectile = createSprite(p.x+300, p.y);
      couchProjectile.setAnimation("FlyingCouch");
      couchProjectile.rotationSpeed = -10;
      couchProjectile.velocityX = -8;
      couches.add(couchProjectile);
      couchProjectile.lifetime = 80;
    }
    if (p.isTouching(couches)) {
      pHealth = pHealth-randomNumber(0, randomNumber(0, randomNumber(0, 1)));
      p.x = p.x-10;
    }
  }
}
function JDLArmStick() {
  JDLA1.y = JDLA2.y + -30;
  JDLA2.y = JDLA3.y + -30;
  JDLA3.y = JDLA4.y + -30;
  JDLA1.x = JDBody.x - 50;
  if (JDLH.x < JDLA2.x) {
    JDLA2.x = JDLA2.x - 3; 
  } else if (JDLH.x > JDLA2.x) {
    JDLA2.x = JDLA2.x + 3; 
  }
  if (JDLA2.x < JDLA1.x - 20) { JDLA2.x = JDLA1.x - 20; }
  if (JDLA2.x > JDLA1.x + 20) { JDLA2.x = JDLA1.x + 20; }
  if (JDLH.x < JDLA3.x) {
    JDLA3.x = JDLA3.x - 3.5;
  } else if (JDLH.x > JDLA3.x) {
    JDLA3.x = JDLA3.x + 3.5;
  }
  if (JDLA3.x < JDLA2.x - 25) { JDLA3.x = JDLA2.x - 25; }
  if (JDLA3.x > JDLA2.x + 25) { JDLA3.x = JDLA2.x + 25; }
  if (JDLH.x < JDLA4.x) {
    JDLA4.x = JDLA4.x - 4;
  } else if (JDLH.x > JDLA4.x) {
    JDLA4.x = JDLA4.x + 4;
  }
  if (JDLA4.x < JDLA3.x - 30) { JDLA4.x = JDLA3.x - 30; }
  if (JDLA4.x > JDLA3.x + 30) { JDLA4.x = JDLA3.x + 30; }
  if (JDArmAttack == false) {
    if (JDLH.y > JDBody.y + 240) {
      JDLH.y = JDLH.y - 10;
    }
  }
}
function JDRArmStick() {
  JDRA1.y = JDRA2.y + -30;
  JDRA2.y = JDRA3.y + -30;
  JDRA3.y = JDRA4.y + -30;
  JDRA1.x = JDBody.x + 65;
  if (JDRH.x < JDRA2.x) {
    JDRA2.x = JDRA2.x - 3;
  } else if (JDRH.x > JDRA2.x) {
    JDRA2.x = JDRA2.x + 3;
  }
  if (JDRA2.x < JDRA1.x - 20) { JDRA2.x = JDRA1.x - 20; }
  if (JDRA2.x > JDRA1.x + 20) { JDRA2.x = JDRA1.x + 20; }
  if (JDRH.x < JDRA3.x) {
    JDRA3.x = JDRA3.x - 3.5;
  } else if (JDRH.x > JDRA3.x) {
    JDRA3.x = JDRA3.x + 3.5;
  }
  if (JDRA3.x < JDRA2.x - 25) { JDRA3.x = JDRA2.x - 25; }
  if (JDRA3.x > JDRA2.x + 25) { JDRA3.x = JDRA2.x + 25; }
  if (JDRH.x < JDRA4.x) {
    JDRA4.x = JDRA4.x - 4;
  } else if (JDRH.x > JDRA4.x) {
    JDRA4.x = JDRA4.x + 4;
  }
  if (JDRA4.x < JDRA3.x - 30) { JDRA4.x = JDRA3.x - 30; }
  if (JDRA4.x > JDRA3.x + 30) { JDRA4.x = JDRA3.x + 30; }
  if (JDArmAttack == false) {
    if (JDRH.y > JDBody.y + 240) {
      JDRH.y = JDRH.y - 10;
    }
  }
}
function lArmAttack() {
  if (JDLH.y<p.y) {
    JDLH.y = JDLH.y+3;
  } else {
    if (LASL==true) {
      JDLH.x = JDLH.x-2;
      if (JDLH.x<JDSetLArmAttack-150) {
        LASL = false;
      }
    } else if ((LASL==false)) {
      if (JDLH.x>JDSetLArmAttack-10) {
        LASL = true;
      }
      JDLH.x = JDLH.x+5;
    }
  }
}
function RArmAttack() {
  if (JDRH.y<p.y) {
    JDRH.y = JDRH.y+3;
  } else {
    if (RASR==true) {
      JDRH.x = JDRH.x+2;
      if (JDRH.x>JDSetRArmAttack+150) {
        RASR = false;
      }
    } else if ((RASR==false)) {
      JDRH.x = JDRH.x-5;
      if (JDRH.x<JDSetRArmAttack+10) {
        RASR = true;
      }
    }
  }
}
var JDBlinkNum = 0;
function JDBlink() {
  JDBlinkNum = randomNumber(1, 75);
  if (JDBlinkNum==37) {
    JDBody.setAnimation("JDFullBody");
    JDBody.setAnimation("JDBlink");
  }
}
//Detect when player runs into enemy
var pHitDir = randomNumber(-10, 10);
function pGotPunched() {
  if (icePunchBlock.isTouching(p)) {
    pHealth = pHealth - 1;
    p.x = p.x + pHitDir;
    icePunchBlock.x = 1000;
  } else if (icePunchBlock2.isTouching(p)) {
    pHealth = pHealth - 1;
    p.x = p.x + pHitDir;
    icePunchBlock2.x = 1000;
  } else if (gVEPunchBlock.isTouching(p)) {
    pHealth = pHealth - 1;
    p.x = p.x + pHitDir;
    gVEPunchBlock.x = 1000;
  } else if (fire.isTouching(p)) {
    pHealth = pHealth - 1;
    p.x = p.x + pHitDir;
  }
  if (JDLA1.isTouching(p)) {
    if (p.x > JDLA1.x) { p.x = p.x + 2; } 
    else if (p.x < JDLA1.x) { p.x = p.x + -2; }
  }
  if (JDLA2.isTouching(p)) {
    if (p.x > JDLA2.x) { p.x = p.x + 2; } 
    else if (p.x < JDLA2.x) { p.x = p.x + -2; }
  }
  if (JDLA3.isTouching(p)) {
    if (p.x > JDLA3.x) { p.x = p.x + 2; } 
    else if (p.x < JDLA3.x) { p.x = p.x + -2; }
  }
  if (JDLA4.isTouching(p)) {
    if (p.x > JDLA4.x) { p.x = p.x + 2; } 
    else if (p.x < JDLA4.x) { p.x = p.x + -2; }
  }
  if (JDRA1.isTouching(p)) {
    if (p.x > JDRA1.x) { p.x = p.x + 2; } 
    else if (p.x < JDRA1.x) { p.x = p.x + -2; }
  }
  if (JDRA2.isTouching(p)) {
    if (p.x > JDRA2.x) { p.x = p.x + 2; } 
    else if (p.x < JDRA2.x) { p.x = p.x + -2; }
  }
  if (JDRA3.isTouching(p)) {
    if (p.x > JDRA3.x) { p.x = p.x + 2; } 
    else if (p.x < JDRA3.x) { p.x = p.x + -2; }
  }
  if (JDRA4.isTouching(p)) {
    if (p.x > JDRA4.x) { p.x = p.x + 2; } 
    else if (p.x < JDRA4.x) { p.x = p.x + -2; }
  }
}
//Detect when enemy dies
function iceDead() {
  if (iceGotHit>=15) {
    if (ICE.y<430) {
      background("white");
      ICE.rotation = 90;
      ICE.setVelocity(0, 3);
    }
  }
}
function iceDead2() {
  if (iceGotHit2>=15) {
    if (ICE2.y<430) {
      background("white");
      ICE2.rotation = 90;
      ICE2.setVelocity(0, 3);
    }
  }
}
function gVEDead() {
  if (gVEGotHit>=55) {
    if (gVE.y<550) {
      background("white");
      gVE.rotation = 90;
      gVE.setVelocity(0, 3);
    }
  }
}
function ElonDead() {
  if (elonGotHit>=55) {
    if (Elon.y<450) {
      background("white");
      Elon.rotation = 90;
      Elon.setVelocity(0, 3);
      drawSprites();
    }
  }
}
function JDDead() {
  if (JDGotHit>=90) {
    background("white");
    JDBody.rotation = 90;
    JDBody.setVelocity(0, 0);
    drawSprites();
  }
}
//Detect when player dies
var deadTime = 0;
var deadDB = false;
function dead() {
  if (pHealth<=0) {
    background("white");
    p.rotation = 90;
    p.y = p.y-2;
    p.setVelocity(0, 0);
    if (deadDB==false) {
      stopSound();
      playSound("assets/ICE-Defense-Game-Over.mp3", false);
      deadDB = true;
    }
    drawSprites();
    if (p.y<-50) {
      deadTime = deadTime+0.1;
      camera.x = 200;
      camera.y = 200;
      if (deadTime<10) {
        textAlign(CENTER, TOP);
        stroke("black");
        strokeWeight(5);
        fill("yellow");
        textSize(50);
        text("You Died", 200, 200);
      } else if ((deadTime>10)) {
        if (deadTime<15) {
          textAlign(CENTER, TOP);
          stroke("black");
          strokeWeight(5);
          fill("yellow");
          textSize(50);
          text("You made it to...", 200, 200);
        }
        if (deadTime>15) {
          textAlign(CENTER, TOP);
          stroke("black");
          strokeWeight(5);
          fill("yellow");
          textSize(50);
          text("stage", 200, 200);
          textAlign(CENTER, TOP);
          stroke("black");
          strokeWeight(5);
          fill("yellow");
          textSize(50);
          text(stageNum, 300, 200);
        }
      }
    }
  }
}
//Player's health bar
var pHPBar = createSprite(50, 310);
pHPBar.setAnimation("PCapsule");
pHPBar.pause();
pHPBar.setFrame(0);
pHPBar.visible = false;
function pHealthBar() {
  textAlign(CENTER, TOP);
  textSize(20);
  fill("white");
  stroke("black");
  strokeWeight(5);
  text(pHealth, camera.x-150, camera.y+140);
  pHPBar.scale = 0.8;
  pHPBar.x = camera.x-150;
  pHPBar.y = camera.y+150;
}
//Hide mouse curser
function hideMouse() {
  if (keyWentDown("up")) {
    noCursor();
  } else if ((keyWentDown("down"))) {
    noCursor();
  } else if ((keyWentDown("left"))) {
    noCursor();
  } else if ((keyWentDown("right"))) {
    noCursor();
  } else if ((keyWentDown("space"))) {
    noCursor();
  } else if ((keyWentDown("z"))) {
    noCursor();
  } else if ((keyWentDown("x"))) {
    noCursor();
  } else if ((mouseDidMove())) {
    cursor("default");
  }
}
//Draw/run everything
var ED = false;
var JDZoom = false;
var JDD = false;
var themeDB = false;
var Sorry = createSprite(200, 10000);
Sorry.setAnimation("StartMenuBG");
function draw() {
  //StartScreen
  hideMouse();
  if (Start==false) {
    if (themeDB==false) {
      playSound("assets/ICE-Defense-Theme.mp3", true);
      themeDB = true;
    }
    StartMenu.visible = true;
    drawSprites();
    StartText = StartText+0.15;
    StartScreenAnim();
    if (keyDown("space")) {
      //StartGame
      stopSound("assets/ICE-Defense-Theme.mp3");
      StartMenu.visible = false;
      Start = true;
      background("white");
      drawSprites();
    }
  }
  //Intro Story
  if (Start==true) {
    if (ifStoryDone==0) {
      difficultyLevels.destroy();
      StartStoryAnim();
      if (keyDown("space")) {
        if (storyStages==1) {
          storyStages = 4;
          timer = 25;
          ICE.visible = true;
        } else {
          if (storyStages==2) {
            storyStages = 4;
            timer = 25;
            ICE.visible = true;
          } else {
            if (storyStages==3) {
              storyStages = 4;
              timer = 25;
              ICE.visible = true;
            }
          }
        }
      }
    } else {
      //StartGame
      if (ifStoryDone==1) {
        if (pHealth>=1) {
          if (stageNum==1) {
            stageScreenTime();
            stage1();
            camera.x = 200;
            if (p.isTouching(LWall)) {
              p.x = p.x+10;
            } else if ((p.isTouching(RWall))) {
              p.x = p.x-10;
            }
          }
          if (stageNum==2) {
            stageScreenTime();
            if (p.isTouching(LWall)) {
              p.x = p.x+10;
            } else if ((p.isTouching(RWall))) {
              p.x = p.x-10;
            }
            stage2();
            camera.x = 200;
          }
          if (stageNum==3) {
            stageScreenTime();
            if (p.isTouching(LWall)) {
              p.x = p.x+10;
            } else if ((p.isTouching(RWall))) {
              p.x = p.x-10;
            }
            stage3();
            camera.x = 200;
          }
          if (stageNum==4) {
            stageScreenTime();
            if (p.isTouching(LWall)) {
              p.x = p.x+10;
            } else if ((p.isTouching(RWall))) {
              p.x = p.x-10;
            }
            stage4();
            camera.x = 200;
          }
          if (stageNum==5) {
            stageScreenTime();
            if (p.isTouching(LWall)) {
              p.x = p.x+10;
            } else if ((p.isTouching(RWall))) {
              p.x = p.x-10;
            }
            stage5();
            camera.x = 200;
          }
          if (stageNum==5.5) {
            StartMenu.visible = false;
            if (p.isTouching(LWall)) {
              p.x = p.x+10;
            } else if ((p.isTouching(RWall))) {
              p.x = p.x-10;
            }
            endStage5Cutscene();
            camera.x = 200;
          }
          if (stageNum==6) {
            stageScreenTime();
            if (p.isTouching(LWall)) {
              p.x = p.x+10;
            } else if ((p.isTouching(RWall))) {
              p.x = p.x-10;
            }
            stage6();
          }
          if (stageNum==6.5) {
            airplaneAnim();
            camera.x = 200;
          }
          if (stageNum==7) {
            airplane.destroy();
            airplaneSky.destroy();
            stageScreenTime();
            if (p.isTouching(LWall)) {
              p.x = p.x+10;
            } else if ((p.isTouching(RWall))) {
              p.x = p.x-10;
            }
            stage7();
          }
          if (stageNum==7.5) {
            if (ED==false) {
              stopSound("assets/G.B.mp3");
              playSound("StageE(2).mp3", false);
              ED = true;
            }
            stageScreenTime();
            ElonCutscene();
          }
          if (stageNum==8) {
            stageScreenTime();
            if (p.isTouching(LWall)) {
              p.x = p.x+10;
            } else if ((p.isTouching(RWall))) {
              p.x = p.x-10;
            }
            if (p.x<Elon.x) {
              if (fires.isTouching(Elon)) {
                if (elonGotHit<=26) {
                  Elon.setAnimation("ElonMuskLFlame");
                } else if (elonGotHit>=27) {
                  Elon.setAnimation("ElonMuskV2LFlame");
                }
                Elon.setFrame(7);
              }
            } else {
              if (fires.isTouching(Elon)) {
                if (elonGotHit<=26) {
                  Elon.setAnimation("ElonMuskRFlame");
                } else if (elonGotHit>=27) {
                  Elon.setAnimation("ElonMuskV2RFlame");
                }
                Elon.setFrame(7);
              }
            }
            stage8();
          }
          if (stageNum==8.5) {
            stopSound("StageELoop(1).mp3");
            JDVanceActivate();
          }
          if (stageNum==9) {
            stageScreenTime();
            if (JDD==false) {
              playSound("assets/JDBossFight.mp3", true);
              JDD = true;
            }
            if (JDZoom==false) {
              camera.zoom = 0.9;
              JDZoom = true;
            }
            if (p.isTouching(LWall)) {
              p.x = p.x+10;
            } else if ((p.isTouching(RWall))) {
              p.x = p.x-10;
            }
            stage9();
          }
          if (stageNum==10) {
            Sorry.x = camera.x;
            Sorry.y = camera.y;
            Sorry.height = 400;
            Sorry.width = 400;
            drawSprites();
            fill("yellow");
            textAlign(CENTER, TOP);
            textSize(30);
            text("GGS", camera.x, camera.y-50);
            textAlign(CENTER, TOP);
            fill("yellow");
            textSize(15);
            text("(Sorry, didn't have time to make the final boss)", camera.x, camera.y+10);
            fill("yellow");
            textAlign(CENTER, TOP);
            textSize(15);
            text("(I will still work on finishing this game)", camera.x, camera.y+50);
            fill("yellow");
            textAlign(CENTER, TOP);
            textSize(30);
            text("Credits:", camera.x, camera.y+100);
            fill("yellow");
            textAlign(CENTER, TOP);
            textSize(15);
            text("Sound Design: Me | Graphic Design: Me", camera.x, camera.y+130);
            fill("yellow");
            textAlign(CENTER, TOP);
            textSize(15);
            text("Composer: Me | Scripting: Me", camera.x, camera.y+150);
            fill("yellow");
            textAlign(CENTER, TOP);
            textSize(15);
            text("Storyboard Artist: Me | Featuring: GoatPerson2000", camera.x, camera.y+170);
          }
        }
      }
    }
  } else {
    if (keyWentDown("right")&&difficultyLevelsChoose<4) {
      difficultyLevelsChoose = difficultyLevelsChoose+1;
      playSound("assets/SelectDifficulty.mp3", false);
    } else if (keyWentDown("left")&&difficultyLevelsChoose>0) {
      difficultyLevelsChoose = difficultyLevelsChoose-1;
      playSound("assets/SelectDifficulty.mp3", false);
    } else if (difficultyLevelsChoose>3) {
      difficultyLevelsChoose = 1;
    } else if (difficultyLevelsChoose<1) {
      difficultyLevelsChoose = 3;
    }
    fill("yellow");
    textSize(12);
    textAlign(CENTER, TOP);
    text("Use arrows to select difficulty", 100, 350);
    if (difficultyLevelsChoose==1) {
      difficultyLevels.setAnimation("IceRWalk");
      Easy = true;
      Normal = false;
      Hard = false;
      pHealth = 90;
      fill("yellow");
      textSize(12);
      textAlign(CENTER, TOP);
      text("EASY", 300, 350);
    } else if ((difficultyLevelsChoose==2)) {
      difficultyLevels.setAnimation("GregoryBovinoRWalk");
      Easy = false;
      Normal = true;
      Hard = false;
      pHealth = 50;
      fill("yellow");
      textSize(12);
      textAlign(CENTER, TOP);
      text("NORMAL", 300, 350);
    } else if ((difficultyLevelsChoose==3)) {
      difficultyLevels.setAnimation("JDBody");
      Easy = false;
      Normal = false;
      Hard = true;
      pHealth = 35;
      fill("yellow");
      textSize(12);
      textAlign(CENTER, TOP);
      text("HARD", 300, 350);
    }
  }
  dead();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

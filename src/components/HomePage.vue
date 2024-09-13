<template>
  <div class="background">
    <div class="stars-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
    <div class="context">
      <h2 class="timeless-logo">Timeless</h2>
      <h2 class="timeless-slogan">Where Every Second Counts.</h2>
      <div class="watch-container">
        <img src="https://jefthanizaam01.github.io/favoriteimages/images/realwatch2.0.png" alt="Watch" class="watch-image" />
        <div class="second-hand"></div>
      </div>
      <router-link to="/products" class="shop-now-link">
        <button class="shop-now-button">Shop Now</button>
      </router-link>
      <div class="watch-details">
        <p>Case Size: 38mm</p>
        <p>Case Thickness: 10mm</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Exo:400,700');
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Exo', sans-serif;
}

.background {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #d2c9c2; 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.stars-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

#stars, #stars2, #stars3 {
  position: absolute;
  width: 1px;
  height: 1px;
  background: transparent;
  animation: animStar 50s linear infinite;
}

#stars {
  box-shadow: 779px 1331px white, 324px 42px white, 303px 586px white,
    1312px 276px white, 451px 625px white, 521px 1931px white, 1087px 1871px white,
    36px 1546px white, 132px 934px white, 1698px 901px white, 1418px 664px white,
    1448px 1157px white, 1084px 232px white, 347px 1776px white, 1722px 243px white,
    1629px 835px white, 479px 969px white, 1231px 960px white, 586px 384px white,
    164px 527px white, 8px 646px white, 1150px 1126px white, 665px 1357px white,
    1556px 1982px white, 1260px 1961px white, 1675px 1741px white,
    1843px 1514px white, 718px 1628px white, 242px 1343px white, 1497px 1880px white,
    1364px 230px white, 1739px 1302px white, 636px 959px white, 304px 686px white,
    614px 751px white, 1935px 816px white, 1428px 60px white, 355px 335px white,
    1594px 158px white, 90px 60px white, 1553px 162px white, 1239px 1825px white,
    1945px 587px white, 749px 1785px white, 1987px 1172px white, 1301px 1237px white,
    1039px 342px white, 1585px 1481px white, 995px 1048px white, 524px 932px white,
    214px 413px white, 1701px 1300px white, 1037px 1613px white, 1871px 996px white,
    1360px 1635px white, 1110px 1313px white, 412px 1783px white, 1949px 177px white,
    903px 1854px white, 700px 1936px white, 378px 125px white, 308px 834px white,
    1118px 962px white, 1350px 1929px white, 781px 1811px white, 561px 137px white,
    757px 1148px white, 1670px 1979px white, 343px 739px white, 945px 795px white,
    576px 1903px white, 1078px 1436px white, 1583px 450px white, 1366px 474px white,
    297px 1873px white, 192px 162px white, 1624px 1633px white, 59px 453px white,
    82px 1872px white, 1933px 498px white, 1966px 1974px white, 1975px 1688px white,
    779px 314px white, 1858px 1543px white, 73px 1507px white, 1693px 975px white,
    1683px 108px white, 1768px 1654px white, 654px 14px white, 494px 171px white,
    1689px 1895px white, 1660px 263px white, 1031px 903px white, 1203px 1393px white,
    1333px 1421px white, 1113px 41px white, 1206px 1645px white, 1325px 1635px white,
    142px 388px white, 572px 215px white, 1535px 296px white, 1419px 407px white,
    1379px 1003px white, 329px 469px white, 1791px 1652px white, 935px 1802px white,
    1330px 1820px white, 421px 1933px white, 828px 365px white, 275px 316px white,
    707px 960px white, 1605px 1554px white, 625px 58px white, 717px 1697px white,
    1669px 246px white, 1925px 322px white, 1154px 1803px white, 1929px 295px white,
    1248px 240px white, 1045px 1755px white, 166px 942px white, 1888px 1773px white,
    678px 1963px white, 1370px 569px white, 1974px 1400px white, 1786px 460px white,
    51px 307px white, 784px 1400px white, 730px 1258px white, 1712px 393px white,
    416px 170px white, 1797px 1932px white, 572px 219px white, 1557px 1856px white,
    218px 8px white, 348px 1334px white, 469px 413px white, 385px 1738px white,
    1357px 1818px white, 240px 942px white, 248px 1847px white, 1535px 806px white,
    236px 1514px white, 1429px 1556px white, 73px 1633px white, 1398px 1121px white,
    671px 1301px white, 1404px 1663px white, 740px 1018px white, 1600px 377px white,
    785px 514px white, 112px 1084px white, 1915px 1887px white, 1463px 1848px white,
    687px 1115px white, 1268px 1768px white, 1729px 1425px white,
    1284px 1022px white, 801px 974px white, 1975px 1317px white, 1354px 834px white,
    1446px 1484px white, 1283px 1786px white, 11px 523px white, 1842px 236px white,
    1355px 654px white, 429px 7px white, 1033px 1128px white, 157px 297px white,
    545px 635px white, 52px 1080px white, 827px 1520px white, 1121px 490px white,
    9px 309px white, 1744px 1586px white, 1014px 417px white, 1534px 524px white,
    958px 552px white, 1403px 1496px white, 387px 703px white, 1522px 548px white,
    1355px 282px white, 1532px 601px white, 1838px 790px white, 290px 259px white,
    295px 598px white, 1601px 539px white, 1561px 1272px white, 34px 1922px white,
    1024px 543px white, 467px 369px white, 722px 333px white, 1976px 1255px white,
    766px 983px white, 1582px 1285px white, 12px 512px white, 617px 1410px white,
    682px 577px white, 1334px 1438px white, 439px 327px white, 1617px 1661px white,
    673px 129px white, 794px 941px white, 1386px 1902px white, 37px 1353px white,
    1467px 1353px white, 416px 18px white, 187px 344px white, 200px 1898px white,
    1491px 1619px white, 811px 347px white, 924px 1827px white, 945px 217px white,
    1735px 1228px white, 379px 1890px white, 79px 761px white, 825px 1837px white,
    1980px 1558px white, 1308px 1573px white, 1488px 1726px white,
    382px 1208px white, 522px 595px white, 1277px 1898px white, 354px 552px white,
    161px 1784px white, 614px 251px white, 526px 1576px white, 17px 212px white,
    179px 996px white, 467px 1208px white, 1944px 1838px white, 1140px 1093px white,
    858px 1007px white, 200px 1064px white, 423px 1964px white, 1945px 439px white,
    1377px 689px white, 1120px 1437px white, 1876px 668px white, 907px 1324px white,
    343px 1976px white, 1816px 1501px white, 1849px 177px white, 647px 91px white,
    1984px 1012px white, 1336px 1300px white, 128px 648px white, 305px 1060px white,
    1324px 826px white, 1263px 1314px white, 1801px 629px white, 1614px 1555px white,
    1634px 90px white, 1603px 452px white, 891px 1984px white, 1556px 1906px white,
    121px 68px white, 1676px 1714px white, 516px 936px white, 1947px 1492px white,
    1455px 1519px white, 45px 602px white, 205px 1039px white, 793px 172px white,
    1562px 1739px white, 1056px 110px white, 1512px 379px white, 1795px 1621px white,
    1848px 607px white, 262px 1719px white, 477px 991px white, 483px 883px white,
    1239px 1197px white, 1496px 647px white, 1649px 25px white, 1491px 1946px white,
    119px 996px white, 179px 1472px white, 1341px 808px white, 1565px 1700px white,
    407px 1544px white, 1754px 357px white, 1288px 981px white, 902px 1997px white,
    1755px 1668px white, 186px 877px white, 1202px 1882px white, 461px 1213px white,
    1400px 748px white, 1969px 1899px white, 809px 522px white, 514px 1219px white,
    374px 275px white, 938px 1973px white, 357px 552px white, 144px 1722px white,
    1572px 912px white, 402px 1858px white, 1544px 1195px white, 667px 1257px white,
    727px 1496px white, 993px 232px white, 1772px 313px white, 1040px 1590px white,
    1204px 1973px white, 1268px 79px white, 1555px 1048px white, 986px 1707px white,
    978px 1710px white, 713px 360px white, 407px 863px white, 461px 736px white,
    284px 1608px white, 103px 430px white, 1283px 1319px white, 977px 1186px white,
    1966px 1516px white, 1287px 1129px white, 70px 1098px white, 1189px 889px white,
    1126px 1734px white, 309px 1292px white, 879px 764px white, 65px 473px white,
    1003px 1959px white, 658px 791px white, 402px 1576px white, 35px 622px white,
    529px 1589px white, 164px 666px white, 1876px 1290px white, 1541px 526px white,
    270px 1297px white, 440px 865px white, 1500px 802px white, 182px 1754px white,
    1264px 892px white, 272px 1249px white, 1289px 1535px white, 190px 1646px white,
    955px 242px white, 1456px 1597px white, 1727px 1983px white, 635px 801px white,
    226px 455px white, 1396px 1710px white, 849px 1863px white, 237px 1264px white,
    839px 140px white, 1122px 735px white, 1280px 15px white, 1318px 242px white,
    1819px 1148px white, 333px 1392px white, 1949px 553px white, 1878px 1332px white,
    467px 548px white, 1812px 1082px white, 1067px 193px white, 243px 156px white,
    483px 1616px white, 1714px 933px white, 759px 1800px white, 1822px 995px white,
    1877px 572px white, 581px 1084px white, 107px 732px white, 642px 1837px white,
    166px 1493px white, 1555px 198px white, 819px 307px white, 947px 345px white,
    827px 224px white, 927px 1394px white, 540px 467px white, 1093px 405px white,
    1140px 927px white, 130px 529px white, 33px 1980px white, 1147px 1663px white,
    1616px 1436px white, 528px 710px white, 798px 1100px white, 505px 1480px white,
    899px 641px white, 1909px 1949px white, 1311px 964px white, 979px 1301px white,
    1393px 969px white, 1793px 1886px white, 292px 357px white, 1196px 1718px white,
    1290px 1994px white, 537px 1973px white, 1181px 1674px white,
    1740px 1566px white, 1307px 265px white, 922px 522px white, 1892px 472px white,
    384px 1746px white, 392px 1098px white, 647px 548px white, 390px 1498px white,
    1246px 138px white, 730px 876px white, 192px 1472px white, 1790px 1789px white,
    928px 311px white, 1253px 1647px white, 747px 1921px white, 1561px 1025px white,
    1533px 1292px white, 1985px 195px white, 728px 729px white, 1712px 1936px white,
    512px 1717px white, 1528px 483px white, 313px 1642px white, 281px 1849px white,
    1212px 799px white, 435px 1191px white, 1422px 611px white, 1718px 1964px white,
    411px 944px white, 210px 636px white, 1502px 1295px white, 1434px 349px white,
    769px 60px white, 747px 1053px white, 789px 504px white, 1436px 1264px white,
    1893px 1225px white, 1394px 1788px white, 1108px 1317px white,
    1673px 1395px white, 854px 1010px white, 1705px 80px white, 1858px 148px white,
    1729px 344px white, 1388px 664px white, 895px 406px white, 1479px 157px white,
    1441px 1157px white, 552px 1900px white, 516px 364px white, 1647px 189px white,
    1427px 1071px white, 785px 729px white, 1080px 1710px white, 504px 204px white,
    1177px 1622px white, 657px 34px white, 1296px 1099px white, 248px 180px white,
    1212px 1568px white, 667px 1562px white, 695px 841px white, 1608px 1247px white,
    751px 882px white, 87px 167px white, 607px 1368px white, 1363px 1203px white,
    1836px 317px white, 1668px 1703px white, 830px 1154px white, 1721px 1398px white,
    1601px 1280px white, 976px 874px white, 1743px 254px white, 1020px 1815px white,
    1670px 1766px white, 1890px 735px white, 1379px 136px white, 1864px 695px white,
    206px 965px white, 1404px 1932px white, 1923px 1360px white, 247px 682px white,
    519px 1708px white, 645px 750px white, 1164px 1204px white, 834px 323px white,
    172px 1350px white, 213px 972px white, 1837px 190px white, 285px 1806px white,
    1047px 1299px white, 1548px 825px white, 1730px 324px white, 1346px 1909px white,
    772px 270px white, 345px 1190px white, 478px 1433px white, 1479px 25px white,
    1994px 1830px white, 1744px 732px white, 20px 1635px white, 690px 1795px white,
    1594px 569px white, 579px 245px white, 1398px 733px white, 408px 1352px white,
    1774px 120px white, 1152px 1370px white, 1698px 1810px white, 710px 1450px white,
    665px 286px white, 493px 1720px white, 786px 5px white, 637px 1140px white,
    764px 324px white, 927px 310px white, 938px 1424px white, 1884px 744px white,
    913px 462px white, 1831px 1936px white, 1527px 249px white, 36px 1381px white,
    1597px 581px white, 1530px 355px white, 949px 459px white, 799px 828px white,
    242px 1471px white, 654px 797px white, 796px 594px white, 1365px 678px white,
    752px 23px white, 1630px 541px white, 982px 72px white, 1733px 1831px white,
    21px 412px white, 775px 998px white, 335px 1945px white, 264px 583px white,
    158px 1311px white, 528px 164px white, 1978px 574px white, 717px 1203px white,
    734px 1591px white, 1555px 820px white, 16px 1943px white, 1625px 1177px white,
    1236px 690px white, 1585px 1590px white, 1737px 1728px white, 721px 698px white,
    1804px 1186px white, 166px 980px white, 1850px 230px white, 330px 1712px white,
    95px 797px white, 1948px 1078px white, 469px 939px white, 1269px 1899px white,
    955px 1220px white, 1137px 1075px white, 312px 1293px white, 986px 1762px white,
    1103px 1238px white, 428px 1993px white, 355px 570px white, 977px 1836px white,
    1395px 1092px white, 276px 913px white, 1743px 656px white, 773px 502px white,
    1686px 1322px white, 1516px 1945px white, 1334px 501px white, 266px 156px white,
    455px 655px white, 798px 72px white, 1059px 1259px white, 1402px 1687px white,
    236px 1329px white, 1455px 786px white, 146px 1228px white, 1851px 823px white,
    1062px 100px white, 1220px 953px white, 20px 1826px white, 36px 1063px white,
    1525px 338px white, 790px 1521px white, 741px 1099px white, 288px 1489px white,
    700px 1060px white, 390px 1071px white, 411px 1036px white, 1853px 1072px white,
    1446px 1085px white, 1164px 874px white, 924px 925px white, 291px 271px white,
    1257px 1964px white, 1580px 1352px white, 1507px 1216px white, 211px 956px white,
    985px 1195px white, 975px 1640px white, 518px 101px white, 663px 1395px white,
    914px 532px white, 145px 1320px white, 69px 1397px white, 982px 523px white,
    257px 725px white, 1599px 831px white, 1636px 1513px white, 1250px 1158px white,
    1132px 604px white, 183px 102px white, 1057px 318px white, 1247px 1835px white,
    1983px 1110px white, 1077px 1455px white, 921px 1770px white, 806px 1350px white,
    1938px 1992px white, 855px 1260px white, 902px 1345px white, 658px 1908px white,
    1845px 679px white, 712px 1482px white, 595px 950px white, 1784px 1992px white,
    1847px 1785px white, 691px 1004px white, 175px 1179px white, 1666px 1911px white,
    41px 61px white, 971px 1080px white, 1830px 1450px white, 1351px 1518px white,
    1257px 99px white, 1395px 1498px white, 1117px 252px white, 1779px 597px white,
    1346px 729px white, 1108px 1144px white, 402px 691px white, 72px 496px white,
    1673px 1604px white, 1497px 974px white, 1865px 1664px white, 88px 806px white,
    918px 77px white, 244px 1118px white, 256px 1820px white, 1851px 1840px white,
    605px 1851px white, 634px 383px white, 865px 37px white, 943px 1024px white,
    1951px 177px white, 1097px 523px white, 985px 1700px white, 1243px 122px white,
    768px 1070px white, 468px 194px white, 320px 1867px white, 1850px 185px white,
    380px 1616px white, 468px 1294px white, 1122px 1743px white, 884px 299px white,
    1300px 1917px white, 1860px 396px white, 1270px 990px white, 529px 733px white,
    1975px 1347px white, 1885px 685px white, 226px 506px white, 651px 878px white,
    1323px 680px white, 1284px 680px white, 238px 1967px white, 911px 174px white,
    1111px 521px white, 1150px 85px white, 794px 502px white, 484px 1856px white,
    1809px 368px white, 112px 953px white, 590px 1009px white, 1655px 311px white,
    100px 1026px white, 1803px 352px white, 865px 306px white, 1077px 1019px white,
    1335px 872px white, 1647px 1298px white, 1233px 1387px white, 698px 1036px white,
    659px 1860px white, 388px 1412px white, 1212px 458px white, 755px 1468px white,
    696px 1654px white, 1144px 60px white;
}

#stars2 {
  width: 2px;
  height: 2px;
  animation: animStar 100s linear infinite;
  box-shadow:  1448px 320px white, 1775px 1663px white, 332px 1364px white,
    878px 340px white, 569px 1832px white, 1422px 1684px white, 1946px 1907px white,
    121px 979px white, 1044px 1069px white, 463px 381px white, 423px 112px white,
    523px 1179px white, 779px 654px white, 1398px 694px white, 1085px 1464px white,
    1599px 1869px white, 801px 1882px white, 779px 1231px white, 552px 932px white,
    1057px 1196px white, 282px 1280px white, 496px 1986px white, 1833px 1120px white,
    1802px 1293px white, 6px 1696px white, 412px 1902px white, 605px 438px white,
    24px 1212px white, 234px 1320px white, 544px 344px white, 1107px 170px white,
    1603px 196px white, 905px 648px white, 68px 1458px white, 649px 1969px white,
    744px 675px white, 1127px 478px white, 714px 1814px white, 1486px 526px white,
    270px 1636px white, 1931px 149px white, 1807px 378px white, 8px 390px white,
    1415px 699px white, 1473px 1211px white, 1590px 141px white, 270px 1705px white,
    69px 1423px white, 1108px 1053px white, 1946px 128px white, 371px 371px white,
    1490px 220px white, 357px 1885px white, 363px 363px white, 1896px 1256px white,
    1979px 1050px white, 947px 1342px white, 1754px 242px white, 514px 974px white,
    65px 1477px white, 1840px 547px white, 950px 695px white, 459px 1150px white,
    1124px 1502px white, 481px 940px white, 680px 839px white, 797px 1169px white,
    1977px 1491px white, 734px 1724px white, 210px 298px white, 816px 628px white,
    686px 770px white, 1721px 267px white, 1663px 511px white, 1481px 1141px white,
    582px 248px white, 1308px 953px white, 628px 657px white, 897px 1535px white,
    270px 931px white, 791px 467px white, 1336px 1732px white, 1013px 1653px white,
    1911px 956px white, 587px 816px white, 83px 456px white, 930px 1478px white,
    1587px 1694px white, 614px 1200px white, 302px 1782px white, 1711px 1432px white,
    443px 904px white, 1666px 714px white, 1588px 1167px white, 273px 1075px white,
    1679px 461px white, 721px 664px white, 1202px 10px white, 166px 1126px white,
    331px 1628px white, 430px 1565px white, 1585px 509px white, 640px 38px white,
    822px 837px white, 1760px 1664px white, 1122px 1458px white, 398px 131px white,
    689px 285px white, 460px 652px white, 1627px 365px white, 348px 1648px white,
    819px 1946px white, 981px 1917px white, 323px 76px white, 979px 684px white,
    887px 536px white, 1348px 1596px white, 1055px 666px white, 1402px 1797px white,
    1300px 1055px white, 937px 238px white, 1474px 1815px white, 1144px 1710px white,
    1629px 1087px white, 911px 919px white, 771px 819px white, 403px 720px white,
    163px 736px white, 1062px 238px white, 1774px 818px white, 1874px 1178px white,
    1177px 699px white, 1244px 1244px white, 1371px 58px white, 564px 1515px white,
    1824px 487px white, 929px 702px white, 394px 1348px white, 1161px 641px white,
    219px 1841px white, 358px 941px white, 140px 1759px white, 1019px 1345px white,
    274px 436px white, 1433px 1605px white, 1798px 1426px white, 294px 1848px white,
    1681px 1877px white, 1344px 1824px white, 1439px 1632px white,
    161px 1012px white, 1308px 588px white, 1789px 582px white, 721px 1910px white,
    318px 218px white, 607px 319px white, 495px 535px white, 1552px 1575px white,
    1562px 67px white, 403px 926px white, 1096px 1800px white, 1814px 1709px white,
    1882px 1831px white, 533px 46px white, 823px 969px white, 530px 165px white,
    1030px 352px white, 1681px 313px white, 338px 115px white, 1607px 211px white,
    1718px 1184px white, 1589px 659px white, 278px 355px white, 464px 1464px white,
    1165px 277px white, 950px 694px white, 1746px 293px white, 793px 911px white,
    528px 773px white, 1883px 1694px white, 748px 182px white, 1924px 1531px white,
    100px 636px white, 1473px 1445px white, 1264px 1244px white, 850px 1377px white,
    987px 1976px white, 933px 1761px white, 922px 1270px white, 500px 396px white,
    1324px 8px white, 1967px 1814px white, 1072px 1401px white, 961px 37px white,
    156px 81px white, 1915px 502px white, 1076px 1846px white, 152px 1669px white,
    986px 1529px white, 1667px 1137px white;
}

#stars3 {
  width: 3px;
  height: 3px;
  animation: animStar 150s linear infinite;
  box-shadow: 387px 1878px white, 760px 1564px white, 1487px 999px white,
    948px 1828px white, 1977px 1001px white, 1284px 1963px white, 656px 284px white,
    1268px 1635px white, 1820px 598px white, 642px 1900px white, 296px 57px white,
    921px 1620px white, 476px 1858px white, 658px 613px white, 1171px 1363px white,
    1419px 283px white, 1037px 731px white, 503px 663px white, 1562px 463px white,
    383px 1197px white, 1171px 1233px white, 876px 1768px white, 856px 1615px white,
    1375px 1924px white, 1725px 918px white, 952px 119px white, 768px 1212px white,
    992px 1462px white, 1929px 717px white, 1947px 755px white, 1818px 1123px white,
    1896px 1672px white, 460px 198px white, 256px 271px white, 752px 544px white,
    1222px 1859px white, 1851px 443px white, 313px 1858px white, 709px 446px white,
    1546px 697px white, 674px 1155px white, 1112px 130px white, 355px 1790px white,
    1496px 974px white, 1696px 480px white, 1316px 1265px white, 1645px 1063px white,
    1182px 237px white, 427px 1582px white, 859px 253px white, 458px 939px white,
    1517px 1644px white, 1943px 60px white, 212px 1650px white, 966px 1786px white,
    473px 712px white, 130px 76px white, 1417px 1186px white, 909px 1580px white,
    1913px 762px white, 204px 1143px white, 1998px 1057px white, 1468px 1301px white,
    144px 1676px white, 21px 1601px white, 382px 1362px white, 912px 753px white,
    1488px 1405px white, 802px 156px white, 174px 550px white, 338px 1366px white,
    1197px 774px white, 602px 486px white, 682px 1877px white, 348px 1503px white,
    407px 1139px white, 950px 1400px white, 922px 1139px white, 1697px 293px white,
    1238px 1281px white, 1038px 1197px white, 376px 1889px white,
    1255px 1680px white, 1008px 1316px white, 1538px 1447px white,
    1186px 874px white, 1967px 640px white, 1341px 19px white, 29px 1732px white,
    16px 1650px white, 1021px 1075px white, 723px 424px white, 1175px 41px white,
    494px 1957px white, 1296px 431px white, 175px 1507px white, 831px 121px white,
    498px 1947px white, 617px 880px white, 240px 403px white;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

.context {
  text-align: left;
  position: relative;
  width: 80%;
  z-index: 2; 
}

.timeless-logo {
  font-size: 4rem;
  color: #766f69; 
  font-family: 'Playfair Display', serif;
  margin-bottom: 20px; 
  position: absolute;
  top: 30%;
  left: 5%; 
}

.timeless-slogan {
  font-size: 2rem;
  color: #766f69; 
  font-family: 'Playfair Display', serif;
  position: absolute;
  top: 45%;
  left: 5.%; 
}

.watch-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.watch-image {
  display: block;
  max-width: 100%;
  height: auto;
  position: relative;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
}

.second-hand {
  position: absolute;
  width: 2px; 
  height: 100px; 
  background: #f0d9c5; 
  top: 30.1%;
  left: 50.1%;
  transform-origin: bottom center;
  transform: rotate(0deg);
  animation: tick 60s linear infinite;
  border-radius: 50% 50% 0 0;
  box-shadow: 0 0 5px black;
}

@keyframes tick {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.shop-now-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1.5rem;
  font-family: 'Playfair Display', serif ;
  color: #fff;
  background-color: #766f69;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  right: 38%;
  top: 20%;
  text-decoration: none;
}

.shop-now-button:hover {
  background-color: #6a5d5a;
}

.watch-details {
  position: absolute;
  top: 40%;
  right: 5%;
  color: #766f69; 
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  z-index: 2;
}

.watch-details p {
  margin: 5px 0;
}
.shop-now-link {
  text-decoration: none; 
}
@media (max-width: 768px) {
  .context {
    width: 90%;
    text-align: center; 
  }

  .timeless-logo {
    font-size: 2.5rem; 
    top: 30%; 
    left: 13%;
    transform: translateX(-50%); 
  }

  .timeless-slogan {
    font-size: 1rem; 
    top: 45%; 
    left: 15%;
    transform: translateX(-50%); 
  }

  .watch-container {
    margin: 0 auto;
    width: 100%;
    height: auto;
  }

  .watch-image {
    width: 80%; 
    max-width: 300px; 
    height: auto;
  }

  .second-hand {
    width: 1.5px; 
    height: 70px; 
    top: 28%;
  }

  .shop-now-button {
    font-size: 1.2rem; 
    padding: 8px 16px; 
    position: static; 
    margin: 20px auto; 
    top: auto; 
    right: auto; 
  }

  .watch-details {
    top: 30%; 
    right: 0%;
    left: 80%;
    transform: translateX(-50%); 
    font-size: 1rem; 
  }

  .watch-details p {
    margin: 10px 0; 
  }
}
@media (min-width: 768px) and (max-width: 1300px) {
  .context {
    width: 90%;
    text-align: center; 
  }

  .timeless-logo {
    font-size: 2.5rem; 
    top: 30%; 
    left: 13%;
    transform: translateX(-50%); 
  }

  .timeless-slogan {
    font-size: 1rem; 
    top: 45%; 
    left: 15%;
    transform: translateX(-50%); 
  }

  .watch-container {
    margin: 0 auto;
    width: 100%;
    height: auto;
  }

  .watch-image {
    width: 80%; 
    max-width: 300px; 
    height: auto;
  }

  .second-hand {
    width: 1.5px; 
    height: 70px; 
    top: 28%;
  }

  .shop-now-button {
    font-size: 1.2rem; 
    padding: 8px 16px; 
    position: static; 
    margin: 20px auto; 
    top: auto; 
    right: auto; 
  }

  .watch-details {
    top: 30%; 
    right: 0%;
    left: 80%;
    transform: translateX(-50%); 
    font-size: 1rem; 
  }

  .watch-details p {
    margin: 10px 0; 
  }
}
@media (min-width: 300px) and (max-width: 700px) {
  .context {
    width: 90%;
    text-align: center; 
  }

  .timeless-logo {
    font-size: 1rem; 
    top: 30%; 
    left: 13%;
    transform: translateX(-50%); 
  }

  .timeless-slogan {
    font-size: 0.5rem; 
    top: 45%; 
    left: 15%;
    transform: translateX(-50%); 
  }

  .watch-container {
    margin: 0 auto;
    width: 50%;
    height: auto;
  }

  .watch-image {
    width: 80%; 
    max-width: 300px; 
    height: auto;
  }

  .second-hand {
    width: 0.4px; 
    height: 20px; 
    top: 33%;
  }

  .shop-now-button {
    font-size: 0.3rem; 
    padding: 8px 16px; 
    position: static; 
    margin: 20px auto; 
    top: auto; 
    right: auto; 
  }

 

  .watch-details p {
    font-size: 0.6rem;
  }
}
</style>
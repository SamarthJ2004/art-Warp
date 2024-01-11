import { logoutFunc } from "../../Authentication/logout.js";

document.querySelector('footer')
    .innerHTML=`
    <div class="foot-panel2">
        <div class='footer-feedback'>
            <div class="connected">
                Always Feel Connected
            </div>
            <div class="input">
                <input placeholder="Your Feedback">
                <i class='fa-solid fa-arrow-right fa-sm'></i>
            </div>
        </div>
        <ul>
            <p>Collections</p>
            <a href="nft-collection-1.html">Gaming</a>
            <a href="nft-collection-2.html">Anime</a>
            <a href="nft-collection-3.html">Beauty of Art</a>
            <a href="nft-collection-4.html">Cars</a>
            <a href="nft-collection-5.html">City Life</a>
            <a href="nft-collection-6.html">Marvelous World</a>
            <a href="nft-collection-7.html">Landscapes</a>
            <a href="nft-collection-8.html">Miscellaneous</a>
        </ul>

        <ul>
            <p>My Account</p>
            <a href='nft-user-profile.html'>My Profile</a>
            <a href='nft-favourites.html'>Favourites</a>
            <a href='nft-cart.html'>Cart</a>
            <a href='documentation.html'>Documentation</a>
            <a href='try premium.html'>Try Premium</a>
            <a id='logout'>Logout</a>
        </ul>

        <ul>
            <p>Join Us</p>
            <a>Instagram</a>
            <a>Facebook</a>
            <a>Discord</a>
            <a>X</a>
        </ul>
        
    </div>

    <div class="foot-panel4">
        <div class="footer-left">
            © 2023 artWarp. All Rights Reserved.
            <a>Terms and Conditions</a>
        </div>

        <div class="footer-right">
            <i class="icons fa-brands fa-facebook fa-xl"></i>
            <i class="icons fa-brands fa-instagram fa-xl"></i>
            <i class="icons fa-brands fa-discord fa-xl"></i>
            <i class="icons fa-brands fa-x-twitter fa-xl"></i>
        </div>
    </div>`;

logoutFunc();
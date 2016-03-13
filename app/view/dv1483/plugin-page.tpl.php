<style>
@import url(https://fonts.googleapis.com/css?family=Tangerine:400,700);
.prgh, .prgh-r {
    font-family: 'Tangerine', cursive;
    font-weight: 700;
    font-size: 32px;
    color: white;
}

.prgh-r {
    text-align: right;
}

.prgh-header {
    font-family: 'Tangerine', cursive;
    font-weight: 700;
    font-size: 52px;
    color: white !important;
}

em {
    font-weight: bold;
}
</style>

<h2 id="start" class="prgh-header">The Lightbox Gallery</h2>

<div id="lightbox-gallery-container" data-images="<?=$picArray?>"></div>

<p>
    The Lightbox Gallery is a jQuery plugin that takes a list of image links and creates a gallery with clickable images.
</p>
<p>
    Click on the thumbnails to view a larger version. Click the large image to view it in a lightbox. Click on the lightbox image to close it or press the Escape key.
</p>
<p>
    <a href="https://github.com/helikopterspark/thelightboxgallery/archive/master.zip">Download plugin as zip-set</a><br />
    <a href="https://github.com/helikopterspark/thelightboxgallery">Download from Github</a>
</p>

<h4 class="prgh">Usage</h4>
<p>
    You need jQuery for this plugin to work. The plugin creates its own elements and style so no extra CSS file is necessary.<br />Put the file <em>jquery.thelightboxgallery.js</em> in your JavaScript directory. Load the script from your page with:</p>
    <pre>
        <code>&lt;script src='your_js_directory/jquery.thelightboxgallery.js'&gt;&lt;/script&gt;</code>
    </pre>

    <p>
        In your HTML-code, create a div-element with <em>id="lightbox-gallery-container"</em>. List your image links in the <em>data-images</em> attribute:</p>
        <pre>
            <code>&lt;div id="lightbox-gallery-container" data-images="
    ../img/IMG_0400.jpg,
    ../img/IMG_0461.jpg,
    ../img/IMG_0778.jpg"&gt;
&lt;/div&gt;</code>
            </pre>
            <p>
                With PHP you can create a function that reads the filenames in a directory and creates the link list in a variable. Then it is only a matter of adding image files to the directory to include new images in the gallery.
            </p>

            <p>Add this code to your main JS-script:</p>

            <pre><code>$(document).ready(function() {
    // other code

    $('#lightbox-gallery-container').addLightbox();

    // other code
});</code></pre>

            <p>
                You also use only the lightbox function on any image:
            </p>
            <pre>
                <code>$('img').click(function() {
    $(this).addLightbox();
});</code>
            </pre>

            <p class="prgh-r">
                Thanks for downloading.
            </p>

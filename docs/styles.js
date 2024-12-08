// Image zoom modal functionality
$(document).ready(function() {
    $('.img-zoom').click(function() {
        var imgSrc = $(this).data('src');
        $('#zoomedImage').attr('src', imgSrc);
        $('#imgModal').modal('show');
    });

    // Close modal on background click
    $('#imgModal').on('hidden.bs.modal', function () {
        $('#zoomedImage').attr('src', '');
    });
});

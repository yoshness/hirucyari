export default function heroAnimation() {
    const IS_SHOWN = 'is-shown',
          $heroWrapper = $('#js-hero'),
          $heroTagline = $('#js-hero-tagline'),
          $heroTitle = $('#js-hero-title'),
          $heroDescription = $('#js-hero-description'),
          $heroNextSection = $('#js-qna-section');

    // fade-in-up on scroll
    $(window).on('load', () => {
        $heroWrapper.addClass(IS_SHOWN).delay(1000).queue((next) => {
            $heroTagline.addClass(IS_SHOWN).delay(500).queue((next) => {
                $heroTitle.addClass(IS_SHOWN).delay(500).queue((next) => {
                    $heroDescription.addClass(IS_SHOWN).delay(500).queue((next) => {
                      $heroNextSection.addClass(IS_SHOWN);
                    });
                });
            });
        });
    });
}
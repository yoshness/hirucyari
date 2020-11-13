export default function readMore() {
    const $trigger = $('.js-read-more'),
          $target = $trigger.data('target');

    $trigger.on('click', (e) => {
        e.preventDefault();
        $($target).slideToggle();

        setTimeout(() => {
        	if($($target).is(':visible')) {
	        	$trigger.text('閉じる');
	        }
	        else {
	        	$trigger.text('詳しく見る');
	        }
        }, 500);
        
    });
}
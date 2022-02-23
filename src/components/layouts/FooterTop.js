import React from 'react';
import Logo from '../Logo';

export default function FooterTop() {
    return (
        <>
            <section className='footer-top'>
                <div className='container mt-4 mb-4 footer-top pt-3 pb-3'>
                    <div className='row d-flex justify-content-center '>
                        <div className='col-md-6'>
                            <Logo />
                        </div>
                        <div className='col-md-6 text-center'>
                            <div class="">
                                <a class="m-3" href="https://www.facebook.com/AvitaIndia/" target="_blank" rel="noreferrer"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                                <a class="m-3" href="https://twitter.com/AvitaIndia" target="_blank" rel="noreferrer"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                                <a class="m-3" href="https://www.instagram.com/avitaind/" target="_blank" rel="noreferrer"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
                                <a class="m-3" href="https://api.whatsapp.com/send?phone=917827845054" target="_blank" rel="noreferrer"><i class="fa fa-whatsapp fa-lg" aria-hidden="true"></i></a>
                                <a class="m-3" href="https://www.youtube.com/channel/UC57qf-v-MTtvJMVjejm-Khg" target="_blank" rel="noreferrer"><i class="fa fa-youtube fa-lg" aria-hidden="true"></i></a>
                                <a class="m-3" href="https://www.linkedin.com/showcase/avita-india/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

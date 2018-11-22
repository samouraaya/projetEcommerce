<?php

/*
 * Event listener to redirect to the home page apres le registrement
 */

/**
 * Description of RedirectAfterRegistrationSubscriber
 *
 * @author wiem
 */

namespace UserBundle\EventListener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use FOS\UserBundle\Event\FormEvent;
use Symfony\Component\Routing\RouterInterface;
use FOS\UserBundle\FOSUserEvents;
use Symfony\Component\HttpFoundation\RedirectResponse;
//use Symfony\Component\Security\Http\Tests\Util\TargetPathTraitTest;

//use FOS\UserBundle\Event\FormEvent;
class RedirectAfterRegistrationSubscriber implements EventSubscriberInterface {

//    use TargetPathTrait;

    private $router;

    public function __construct(RouterInterface $router) {
        $this->router = $router;
    }

    public function onRegistrationSuccess(FormEvent $event) {

//prendre l'url de la seesion si l'utilisateur a tenter de voir un url de l'application
//
//        $url = $this->TargetPathTrait($event->getRequest()->getSession(), 'main');
        
//        if (!$url) {
            $url = $this->router->generate('font_homepage');
//        }
        $response = new RedirectResponse($url);
        $event->setResponse($response);
    }

    public static function getSubscribedEvents() {
        return [
            FOSUserEvents::REGISTRATION_SUCCESS => 'onRegistrationSuccess'
        ];
    }

}

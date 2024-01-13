controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    carnival.startCountdownGame(15, carnival.WinTypes.Win)
    bigTurkey.vy = -300
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`cage`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency17`)
    freeTurkeys = sprites.create(assets.image`turkey`, SpriteKind.Rescued)
    tiles.placeOnTile(freeTurkeys, location)
    freeTurkeys.follow(sprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile16, function (sprite, location) {
    bigTurkey.sayText("wahoo!!!")
    freeTurkeys.sayText("wahoo!!!")
    carnival.onGameOverExpanded(carnival.WinTypes.Timed)
})
let freeTurkeys: Sprite = null
let bigTurkey: Sprite = null
bigTurkey = sprites.create(img`
    ........................
    ..................beb...
    .................beb....
    .....bbb......bbbbbb....
    .....b2b.....bbeeeeeb...
    .bb..b2bb...bbed1feedf..
    bbbb.b22b...bee1ffed4c..
    bb4bbb22b...beedfbdd44..
    .b44bb22bb..deeeee44444b
    .bb44bb222b.beeee44444b.
    ..bb44bbb22bcbeeee22eb..
    ....bb44c4cecbeee2222...
    bbbbbbbb442ceeeeeeeeb...
    b2222222eeeeeeeeeeeeb...
    bb222b4ceeeeeeeeeeeeeb..
    .bbbb444eeeeeeeceeeeeb..
    ...bb4dceeeeeeeceeeeeb..
    ..bb44bdcdeeeeeceeeeeb..
    ..bbbbcddccbdecceeeeeb..
    ......bbbdcccdeeeeeebb..
    .......bbccccccceeebb...
    ........bbbcccccbbbb....
    ..........bbbbbbb44.....
    ........................
    `, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
scene.cameraFollowSprite(bigTurkey)
tiles.placeOnRandomTile(bigTurkey, assets.tile`start`)
carnival.startTimer()

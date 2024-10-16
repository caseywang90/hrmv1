const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{Heart: 0},
	{Keyboard: 0},
	{Text: 0},
	{Text2: 0},
	{heartRate: 0},
	{currentFrame: 0}
];

self.InstanceType = {
	Heart: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {}
}
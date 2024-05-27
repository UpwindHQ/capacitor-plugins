// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorShareTo",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorShareTo",
            targets: ["ShareToCapPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "ShareToCapPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/ShareToCapPlugin"),
        .testTarget(
            name: "ShareToCapPluginTests",
            dependencies: ["ShareToCapPlugin"],
            path: "ios/Tests/ShareToCapPluginTests")
    ]
)
